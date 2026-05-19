import { eventHandler, readBody, type H3Event } from 'h3';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import {
  checkRateLimit,
  validateInput,
  contactValidation,
  sanitizeHTML,
  logSecurityEvent,
  getClientIP,
} from '../utils/security';

export default eventHandler(async (event: H3Event) => {
  try {
    // Rate limiting check
    if (!checkRateLimit(event, 'contact')) {
      logSecurityEvent(
        'Rate limit exceeded',
        { endpoint: 'contact' },
        getClientIP(event)
      );
      throw createError({
        statusCode: 429,
        statusMessage: 'Too many requests. Please try again later.',
      });
    }

    // Validate and sanitize input
    const body = await validateInput(event, contactValidation);

    // Additional honeypot check
    if (body.website && body.website.trim() !== '') {
      logSecurityEvent(
        'Honeypot triggered',
        { endpoint: 'contact' },
        getClientIP(event)
      );
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid request',
      });
    }

    // Sanitize inputs
    const safeName = sanitizeHTML(body.name || 'N/A');
    const safePhone = sanitizeHTML(body.phoneNumber || 'N/A');
    const safeEmail = body.email.trim().toLowerCase();
    const safeMessage = sanitizeHTML(body.message || 'No message provided');

    const config = useRuntimeConfig();
    const SITE_URL = config.public.SITE_URL;

    const transporter = nodemailer.createTransport(<SMTPTransport.Options>{
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: config.SMTP_EMAIL,
        pass: config.SMTP_APP_PASSWORD,
      },
      // Add timeout settings
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 5000, // 5 seconds
      socketTimeout: 10000, // 10 seconds
    });

    // Test SMTP connection
    await transporter.verify();

    const emailTemplate = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <div style="max-width:700px;margin:20px auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.1);overflow:hidden;">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#D4A574 0%,#D4A574 100%);padding:30px 20px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:28px;font-weight:bold;text-shadow:0 2px 4px rgba(0,0,0,0.2);">
        📞 New Contact Form Submission
      </h1>
      <p style="color:#ffffff;margin:10px 0 0 0;font-size:16px;opacity:0.9;">
        Airport Chauffeurs - Premium Transportation Service
      </p>
    </div>

    <!-- Content -->
    <div style="padding:30px;">
      
      <!-- Customer Information -->
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          👤 Customer Information
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555;width:140px;">Name:</td>
            <td style="padding:8px 0;color:#333;">${safeName}</td>
          </tr>
          ${safePhone !== 'N/A' ? `<tr><td style="padding:8px 0;font-weight:600;color:#555;">Phone:</td><td style="padding:8px 0;color:#333;">${safePhone}</td></tr>` : ''}
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555;">Email:</td>
            <td style="padding:8px 0;color:#333;">${safeEmail}</td>
          </tr>
        </table>
      </div>

      <!-- Message -->
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          💬 Customer Message
        </h2>
        <div style="background:#ffffff;padding:15px;border-radius:6px;border-left:3px solid #D4A574;color:#333;line-height:1.6;">
          ${safeMessage}
        </div>
      </div>

      <!-- Action Button -->
      <div style="text-align:center;margin-top:30px;">
        <p style="color:#6c757d;font-size:14px;margin:0;">
          Please contact the customer directly to respond to their inquiry.
        </p>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#f8f9fa;padding:20px;text-align:center;border-top:1px solid #e9ecef;">
      <p style="margin:0;color:#6c757d;font-size:14px;">
        This contact form submission was generated from <strong>${SITE_URL}</strong>
      </p>
      <p style="margin:5px 0 0 0;color:#6c757d;font-size:12px;">
        Airport Chauffeurs - Premium Transportation Services
      </p>
    </div>

  </div>
</body>
</html>
`;

    // Add timeout wrapper for email sending
    const emailPromise = transporter.sendMail({
      from: `"Airport Chauffeurs" <${config.SMTP_EMAIL}>`,
      to: config.SMTP_EMAIL,
      replyTo: safeEmail,
      subject: 'New Contact Form Submission',
      html: emailTemplate,
    });

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email sending timeout')), 30000); // 30 second timeout
    });

    await Promise.race([emailPromise, timeoutPromise]);

    return { success: true, message: 'Email sent!' };
  } catch (error) {
    // Return more specific error message
    let errorMessage = 'Failed to send email. Please try again.';

    if (error instanceof Error) {
      if (error.message.includes('timeout')) {
        errorMessage = 'Email sending timed out. Please try again.';
      } else if (error.message.includes('authentication')) {
        errorMessage = 'Email authentication failed. Please contact support.';
      } else if (error.message.includes('connection')) {
        errorMessage =
          'Email service connection failed. Please try again later.';
      }
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
});
