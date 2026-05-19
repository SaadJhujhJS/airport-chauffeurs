import { eventHandler, readBody, getHeader, type H3Event } from 'h3';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import {
  checkRateLimit,
  validateInput,
  bookingValidation,
  sanitizeHTML,
  logSecurityEvent,
  getClientIP,
} from '../utils/security';
import { getLocationFromTimezone } from '../utils/timezone';
import { getBrowserName, getOSName } from '../utils/user-agent';

export default eventHandler(async (event: H3Event) => {
  const startTime = Date.now();
  let clientIP = 'unknown';

  try {
    // Get client IP for logging
    clientIP = getClientIP(event) || 'unknown';

    // Rate limiting check
    if (!checkRateLimit(event, 'booking')) {
      logSecurityEvent(
        'Rate limit exceeded',
        { endpoint: 'booking', clientIP },
        clientIP
      );
      throw createError({
        statusCode: 429,
        statusMessage: 'Too many requests. Please try again later.',
      });
    }

    // Validate and sanitize input
    const body = await validateInput(event, bookingValidation);

    // Additional honeypot check
    if (body.website && body.website.trim() !== '') {
      logSecurityEvent(
        'Honeypot triggered',
        { endpoint: 'booking', clientIP },
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
    const safeVehicle = body.vehicle || null;
    // Get user's timezone or default to system timezone
    const userTimezone =
      body.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone;

    const userAgent = getHeader(event, 'user-agent') || 'Unknown';

    // Parse device type from User-Agent
    const getDeviceType = (ua: string): string => {
      if (/tablet|ipad|playbook|silk/i.test(ua)) return 'Tablet';
      if (
        /mobile|iphone|ipod|android|blackberry|opera|mini|windows\s+ce|palm|smartphone|iemobile/i.test(
          ua
        )
      )
        return 'Mobile';
      return 'Desktop';
    };

    const deviceType = getDeviceType(userAgent);

    const location = getLocationFromTimezone(userTimezone);
    const browserName = getBrowserName(userAgent);
    const osName = getOSName(userAgent);
    // Generate unique booking reference: timestamp (last 8 digits) + random (2 digits)
    // This ensures uniqueness even if multiple bookings occur at the same millisecond
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, '0');
    const bookingReference = `BK-${timestamp}${random}`;

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
  <title>New Booking Request</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
  <div style="max-width:700px;margin:20px auto;background:#ffffff;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.1);overflow:hidden;">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#D4A574 0%,#D4A574 100%);padding:30px 20px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:28px;font-weight:bold;text-shadow:0 2px 4px rgba(0,0,0,0.2);">
        🚗 New Booking Request
      </h1>
      <p style="color:#ffffff;margin:10px 0 0 0;font-size:16px;opacity:0.9;">
        Airport Chauffeurs - Premium Transportation Service
      </p>
    </div>

    <!-- Content -->
    <div style="padding:30px;">
      
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
        <p style="color:#666;margin:5px 0 0 0;font-size:14px;">
          Location: <strong style="color:#D4A574;">${sanitizeHTML(location)}</strong>
        </p>
        <p style="color:#666;margin:5px 0 0 0;font-size:14px;">
          Device Information: <strong style="color:#D4A574;">${sanitizeHTML(deviceType)}, ${sanitizeHTML(browserName)}, ${sanitizeHTML(osName)}</strong>
        </p>
      </div>

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
          ${safePhone ? `<tr><td style="padding:8px 0;font-weight:600;color:#555;">Phone:</td><td style="padding:8px 0;color:#333;">${safePhone}</td></tr>` : ''}
          ${safeEmail ? `<tr><td style="padding:8px 0;font-weight:600;color:#555;">Email:</td><td style="padding:8px 0;color:#333;">${safeEmail}</td></tr>` : ''}
        </table>
      </div>

      <!-- Journey Details -->
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          🗺️ Journey Details
        </h2>
        
        <!-- Pickup -->
        <div style="margin-bottom:15px;">
          <div style="display:flex;align-items:center;margin-bottom:5px;">
            <div style="width:12px;height:12px;background:#28a745;border-radius:50%;margin-right:10px;"></div>
            <strong style="color:#555;">Pickup Location:</strong>
          </div>
          <div style="margin-left:22px;color:#333;background:#ffffff;padding:10px;border-radius:6px;border-left:3px solid #28a745;">
            ${safePickUpLocation}
          </div>
        </div>

        <!-- Stops -->
        ${
          safeStops.length > 0
            ? `
        <div style="margin-bottom:15px;">
          <div style="display:flex;align-items:center;margin-bottom:10px;">
            <div style="width:12px;height:12px;background:#007bff;border-radius:50%;margin-right:10px;"></div>
            <strong style="color:#555;">Additional Stops:</strong>
          </div>
          <div style="margin-left:22px;">
            ${safeStops
              .map(
                (stop: any, index: number) => `
              <div style="background:#ffffff;padding:8px 12px;margin-bottom:5px;border-radius:6px;border-left:3px solid #007bff;color:#333;">
                <span style="font-weight:600;color:#007bff;">Stop ${index + 1}:</span> ${sanitizeHTML(stop.value || stop)}
              </div>
            `
              )
              .join('')}
          </div>
        </div>
        `
            : ''
        }

        <!-- Dropoff -->
        <div style="margin-bottom:15px;">
          <div style="display:flex;align-items:center;margin-bottom:5px;">
            <div style="width:12px;height:12px;background:#dc3545;border-radius:50%;margin-right:10px;"></div>
            <strong style="color:#555;">Dropoff Location:</strong>
          </div>
          <div style="margin-left:22px;color:#333;background:#ffffff;padding:10px;border-radius:6px;border-left:3px solid #dc3545;">
            ${safeDropOffLocation}
          </div>
        </div>
      </div>

      <!-- Service Details -->
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          ⚙️ Service Details
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          ${safeNumberOfPassengers ? `<tr><td style="padding:8px 0;font-weight:600;color:#555;width:180px;">Passengers:</td><td style="padding:8px 0;color:#333;">${safeNumberOfPassengers}</td></tr>` : ''}
          ${safeDate ? `<tr><td style="padding:8px 0;font-weight:600;color:#555;">Pickup Date:</td><td style="padding:8px 0;color:#333;">${safeDate}</td></tr>` : ''}
          ${safeTime ? `<tr><td style="padding:8px 0;font-weight:600;color:#555;">Pickup Time:</td><td style="padding:8px 0;color:#333;">${safeTime}</td></tr>` : ''}
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
          <div style="display:flex;align-items:center;margin-bottom:15px;">
            <div style="width:16px;height:16px;background:#D4A574;border-radius:50%;margin-right:12px;"></div>
            <h3 style="margin:0;color:#333;font-size:18px;font-weight:bold;">${sanitizeHTML(safeVehicle.name)}</h3>
          </div>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#555;width:120px;">Category:</td>
              <td style="padding:8px 0;color:#333;">${sanitizeHTML(safeVehicle.category)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#555;">Passengers:</td>
              <td style="padding:8px 0;color:#333;">${sanitizeHTML(safeVehicle.passengers)}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;font-weight:600;color:#555;">Luggage:</td>
              <td style="padding:8px 0;color:#333;">${sanitizeHTML(safeVehicle.luggage)}</td>
            </tr>
          </table>
        </div>
      </div>
      `
          : ''
      }

      <!-- Additional Information -->
      ${
        safeAdditionalInfo !== '—'
          ? `
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:25px;">
        <h2 style="color:#333;margin:0 0 15px 0;font-size:20px;border-bottom:2px solid #D4A574;padding-bottom:8px;">
          📝 Additional Information
        </h2>
        <div style="background:#ffffff;padding:15px;border-radius:6px;border-left:3px solid #D4A574;color:#333;line-height:1.6;">
          ${safeAdditionalInfo}
        </div>
      </div>
      `
          : ''
      }

      <!-- Action Button -->
      <div style="text-align:center;margin-top:30px;">
        <p style="color:#6c757d;font-size:14px;margin:0;">
          Please contact the customer directly to confirm booking details and provide pricing.
        </p>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#f8f9fa;padding:20px;text-align:center;border-top:1px solid #e9ecef;">
      <p style="margin:0;color:#6c757d;font-size:14px;">
        This booking request was generated from <strong>${SITE_URL}</strong>
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
      subject: 'New Booking Request',
      html: emailTemplate,
    });

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Email sending timeout')), 30000); // 30 second timeout
    });

    await Promise.race([emailPromise, timeoutPromise]);

    logSecurityEvent('booking_email_sent', {
      ip: clientIP,
      email: safeEmail,
      bookingReference: bookingReference,
    });

    return {
      success: true,
      message: 'Email sent!',
      bookingReference: bookingReference,
    };
  } catch (error: any) {
    const endTime = Date.now();
    const processingTime = endTime - startTime;

    console.error('Error sending booking email:', error);

    // Log security event for failed attempts
    logSecurityEvent('booking_email_failed', {
      ip: clientIP,
      error: error.message,
      processingTime,
    });

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
