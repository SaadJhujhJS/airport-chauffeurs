import { eventHandler, readBody, type H3Event } from 'h3';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import {
  checkRateLimit,
  validateInput,
  sanitizeHTML,
  logSecurityEvent,
  getClientIP,
} from '../utils/security';

export default eventHandler(async (event: H3Event) => {
  const startTime = Date.now();
  let clientIP = 'unknown';

  try {
    // Get client IP for logging
    clientIP = getClientIP(event) || 'unknown';

    // Security: Rate limiting
    if (!checkRateLimit(event, 'user-confirmation')) {
      logSecurityEvent('rate_limit_exceeded', {
        ip: clientIP,
        endpoint: 'user-confirmation',
      });
      throw createError({
        statusCode: 429,
        statusMessage: 'Too many requests. Please try again later.',
      });
    }

    const body = await readBody(event);

    // Basic validation - email is required for user confirmation
    if (!body.email || !body.email.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email is required for confirmation',
      });
    }

    // Additional honeypot check
    if (body.website && body.website.trim() !== '') {
      logSecurityEvent(
        'Honeypot triggered',
        { endpoint: 'user-confirmation', clientIP },
        clientIP
      );
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid request',
      });
    }

    // Sanitize inputs
    const safeName = sanitizeHTML(body.name);
    const safePhone = sanitizeHTML(body.phoneNumber);
    const safeEmail = body.email.trim().toLowerCase();
    const safeNumberOfPassengers = body.numberOfPassengers || '—';
    const safeDate = sanitizeHTML(body.date);
    const safeTime = sanitizeHTML(body.time);
    const safePickUpLocation = sanitizeHTML(body.pickUpLocation);
    const safeDropOffLocation = sanitizeHTML(body.dropOffLocation || '—');
    const safeStops = body.stops && body.stops.length > 0 ? body.stops : [];
    const safeServiceType = sanitizeHTML(body.serviceType);
    const safeAdditionalInfo = sanitizeHTML(body.additionalInfo || '—');
    const safeTransferType = sanitizeHTML(body.transferType || 'one-way');
    const safeVehicle = body.vehicleCategory || null;
    // Get user's timezone or default to system timezone
    const userTimezone =
      body.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Use the same booking reference from admin email (passed from frontend)
    // Fallback: Generate unique reference if not provided (timestamp + random)
    const bookingReference =
      body.bookingReference ||
      (() => {
        const timestamp = Date.now().toString().slice(-8);
        const random = Math.floor(Math.random() * 100)
          .toString()
          .padStart(2, '0');
        return `BK-${timestamp}${random}`;
      })();

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
  <title>Booking Confirmation</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <div style="max-width:700px;margin:20px auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.1);overflow:hidden;">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#D4A574 0%,#D4A574 100%);padding:30px 20px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:28px;font-weight:bold;text-shadow:0 2px 4px rgba(0,0,0,0.2);">
        ✅ Booking Confirmed!
      </h1>
      <p style="color:#ffffff;margin:10px 0 0 0;font-size:16px;opacity:0.9;">
        Thank you for choosing our chauffeur service
      </p>
    </div>

    <!-- Main Content -->
    <div style="padding:30px 20px;">
      
      <!-- Greeting -->
      <div style="margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 10px 0;font-size:22px;">
          Hello ${safeName}! 👋
        </h2>
        <p style="color:#666;margin:0;font-size:16px;line-height:1.5;">
          Your booking has been successfully confirmed. We're excited to provide you with a premium chauffeur service experience.
        </p>
      </div>

      <!-- Booking Reference -->
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;border-left:4px solid #D4A574;">
        <h3 style="color:#333;margin:0 0 10px 0;font-size:18px;">
          📋 Booking Reference
        </h3>
        <p style="color:#666;margin:0;font-size:14px;">
          Reference: <strong style="color:#D4A574;">${bookingReference}</strong>
        </p>
        <p style="color:#666;margin:5px 0 0 0;font-size:14px;">
          Confirmed on: ${new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            timeZone: userTimezone,
            timeZoneName: 'short',
          }).format(new Date())}
        </p>
      </div>

      <!-- Journey Details -->
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          🚗 Journey Details
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555;width:180px;">From:</td>
            <td style="padding:8px 0;color:#333;">${safePickUpLocation}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555;">To:</td>
            <td style="padding:8px 0;color:#333;">${safeDropOffLocation}</td>
          </tr>
          ${
            safeStops.length > 0
              ? `
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555;">Stops:</td>
            <td style="padding:8px 0;color:#333;">
              ${safeStops.map((stop: any) => `• ${stop.value}`).join('<br>')}
            </td>
          </tr>
          `
              : ''
          }
        </table>
      </div>

      <!-- Service Details -->
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          ⚙️ Service Details
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          ${safeNumberOfPassengers ? `<tr><td style="padding:8px 0;font-weight:600;color:#555;width:180px;">Passengers:</td><td style="padding:8px 0;color:#333;">${safeNumberOfPassengers}</td></tr>` : ''}
          <tr><td style="padding:8px 0;font-weight:600;color:#555;">Pickup Date:</td><td style="padding:8px 0;color:#333;">${safeDate}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600;color:#555;">Pickup Time:</td><td style="padding:8px 0;color:#333;">${safeTime}</td></tr>
          ${safeServiceType ? `<tr><td style="padding:8px 0;font-weight:600;color:#555;">Service Type:</td><td style="padding:8px 0;color:#333;">${safeServiceType}</td></tr>` : ''}
          <tr><td style="padding:8px 0;font-weight:600;color:#555;">Transfer Type:</td><td style="padding:8px 0;color:#333;">${safeTransferType === 'one-way' ? 'One Way' : 'Return'}</td></tr>
        </table>
      </div>

      <!-- Vehicle Details -->
      ${
        safeVehicle
          ? `
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          🚗 Selected Vehicle
        </h2>
        <div style="background:#ffffff;border-radius:8px;padding:20px;border-left:4px solid #D4A574;">
          <div style="display:flex;align-items:center;justify-content:center;margin-bottom:15px;">
            <div style="width:50px;height:50px;background:linear-gradient(135deg,#D4A574 0%,#D4A574 100%);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:15px;">
              <span style="color:#ffffff;font-size:20px;">🚗</span>
            </div>
            <div style="text-align:center;">
              <h3 style="color:#333;margin:0;font-size:18px;font-weight:bold;">${safeVehicle.name || 'Selected Vehicle'}</h3>
              <p style="color:#666;margin:5px 0 0 0;font-size:14px;">${safeVehicle.label || 'Premium Service'}</p>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
            <div style="text-align:center;padding:10px;background:#f8f9fa;border-radius:6px;">
              <p style="margin:0;font-size:12px;color:#666;font-weight:600;">CAPACITY</p>
              <p style="margin:5px 0 0 0;font-size:16px;color:#333;font-weight:bold;">${safeVehicle.capacity || '—'}</p>
            </div>
            <div style="text-align:center;padding:10px;background:#f8f9fa;border-radius:6px;">
              <p style="margin:0;font-size:12px;color:#666;font-weight:600;">LUGGAGE</p>
              <p style="margin:5px 0 0 0;font-size:16px;color:#333;font-weight:bold;">${safeVehicle.luggage || '—'}</p>
            </div>
          </div>
        </div>
      </div>
      `
          : ''
      }

      <!-- Contact Information -->
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          📞 Contact Information
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555;width:180px;">Name:</td>
            <td style="padding:8px 0;color:#333;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555;">Phone:</td>
            <td style="padding:8px 0;color:#333;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:600;color:#555;">Email:</td>
            <td style="padding:8px 0;color:#333;">${safeEmail}</td>
          </tr>
        </table>
      </div>

      <!-- Additional Information -->
      ${
        safeAdditionalInfo !== '—'
          ? `
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          📝 Additional Information
        </h2>
        <p style="color:#333;margin:0;font-size:14px;line-height:1.5;background:#ffffff;padding:15px;border-radius:6px;border-left:4px solid #D4A574;">
          ${safeAdditionalInfo}
        </p>
      </div>
      `
          : ''
      }

      <!-- Important Notes -->
      <div style="background:#fff3cd;border:1px solid #ffeaa7;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h3 style="color:#856404;margin:0 0 10px 0;font-size:16px;">
          ⚠️ Important Notes
        </h3>
        <ul style="color:#856404;margin:0;padding-left:20px;font-size:14px;line-height:1.5;">
          <li>Please arrive at the pickup location at your scheduled time</li>
          <li>Our driver will contact you before pickup</li>
          <li>For any changes or cancellations, please contact us in advance</li>
          <li>Keep this confirmation email for your records</li>
        </ul>
      </div>

      <!-- Next Steps -->
      <div style="background:#d1ecf1;border:1px solid #bee5eb;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h3 style="color:#0c5460;margin:0 0 10px 0;font-size:16px;">
          🔄 What's Next?
        </h3>
        <ol style="color:#0c5460;margin:0;padding-left:20px;font-size:14px;line-height:1.5;">
          <li>You will receive a call from our driver before pickup</li>
          <li>Please be ready at the pickup location at the scheduled time</li>
          <li>Enjoy your premium chauffeur service experience!</li>
        </ol>
      </div>

      <!-- Footer -->
      <div style="text-align:center;padding:20px 0;border-top:1px solid #eee;">
        <p style="color:#666;margin:0 0 10px 0;font-size:14px;">
          Thank you for choosing our chauffeur service!
        </p>
        <p style="color:#999;margin:0;font-size:12px;">
          This is an automated confirmation email. Please do not reply to this email.
        </p>
        <div style="margin-top:15px;">
          <a href="${SITE_URL}" style="display:inline-block;background:linear-gradient(135deg,#D4A574 0%,#D4A574 100%);color:#ffffff;text-decoration:none;padding:10px 20px;border-radius:6px;font-size:14px;font-weight:600;">
            Visit Our Website
          </a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    const mailOptions = {
      from: `"Airport Chauffeurs" <${config.SMTP_EMAIL}>`,
      to: safeEmail,
      subject: `✅ Booking Confirmed - ${safePickUpLocation} to ${safeDropOffLocation}`,
      html: emailTemplate,
    };

    await transporter.sendMail(mailOptions);

    logSecurityEvent('user_confirmation_sent', {
      ip: clientIP,
      email: safeEmail,
      bookingReference: bookingReference,
    });

    return {
      success: true,
      message: 'User confirmation email sent successfully',
      bookingReference: bookingReference,
    };
  } catch (error: any) {
    const endTime = Date.now();
    const processingTime = endTime - startTime;

    console.error('Error sending user confirmation email:', error);

    // Log security event for failed attempts
    logSecurityEvent('user_confirmation_failed', {
      ip: clientIP,
      error: error.message,
      processingTime,
    });

    // Don't expose internal errors to client
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send confirmation email. Please try again.',
    });
  }
});
