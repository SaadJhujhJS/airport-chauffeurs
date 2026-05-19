import { H3Event } from 'h3';
import { body, validationResult } from 'express-validator';
import { createHash, randomBytes } from 'crypto';

// Rate limiting storage (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// File upload validation (not used - no file uploads allowed)
// export const ALLOWED_FILE_TYPES = [];
// export const MAX_FILE_SIZE = 0;
// export const MAX_FILES_PER_REQUEST = 0;

// Rate limiting configuration
export const RATE_LIMITS = {
  contact: { max: 5, windowMs: 15 * 60 * 1000 }, // 5 requests per 15 minutes
  booking: { max: 115, windowMs: 15 * 60 * 1000 }, // 5 requests per 15 minutes
  'user-confirmation': { max: 10, windowMs: 15 * 60 * 1000 }, // 10 requests per 15 minutes
};

// Input validation schemas
export const contactValidation = [
  body('name')
    .optional()
    .isLength({ min: 1, max: 100 })
    .withMessage('Name must be between 1 and 100 characters')
    .matches(/^[a-zA-Z\s\-'\.]+$/)
    .withMessage('Name contains invalid characters'),

  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),

  body('phoneNumber')
    .isLength({ min: 1, max: 25 })
    .withMessage('Phone number is required and must not exceed 25 characters')
    .matches(/^[\d\s\-\+\(\)\.]+$/)
    .withMessage('Phone number contains invalid characters'),

  body('message')
    .optional()
    .isLength({ max: 2000 })
    .withMessage('Message must not exceed 2000 characters')
    .escape(),

  // Honeypot field
  body('website').optional().isEmpty().withMessage('Bot detected'),
];

export const bookingValidation = [
  body('name')
    .isLength({ min: 1, max: 100 })
    .withMessage('Name is required and must be between 1 and 100 characters')
    .matches(/^[a-zA-Z\s\-'\.]+$/)
    .withMessage('Name contains invalid characters'),

  body('email')
    .optional()
    .isEmail()
    .normalizeEmail()
    .withMessage('Email must be valid if provided'),

  body('phoneNumber')
    .isLength({ min: 1, max: 25 })
    .withMessage('Phone number is required and must not exceed 25 characters')
    .matches(/^[\d\s\-\+\(\)\.]+$/)
    .withMessage('Phone number contains invalid characters'),

  body('pickUpLocation')
    .isLength({ min: 1, max: 300 })
    .withMessage(
      'Pick up location is required and must not exceed 300 characters'
    )
    .escape(),

  body('dropOffLocation')
    .optional()
    .isLength({ max: 300 })
    .withMessage('Drop off location must not exceed 300 characters')
    .escape(),

  body('stops')
    .optional()
    .isArray()
    .withMessage('Stops must be an array')
    .custom(stops => {
      if (!Array.isArray(stops)) return true; // Let isArray handle this

      // Check each stop has required structure
      for (const stop of stops) {
        if (!stop || typeof stop !== 'object') {
          throw new Error('Each stop must be an object');
        }
        if (!stop.value || typeof stop.value !== 'string') {
          throw new Error('Each stop must have a value string');
        }
        if (stop.value.length > 300) {
          throw new Error('Stop location must not exceed 300 characters');
        }
      }
      return true;
    }),

  body('date')
    .optional()
    .isString()
    .isLength({ min: 1, max: 50 })
    .withMessage('Date must be a valid string'),

  body('time')
    .optional()
    .isString()
    .isLength({ min: 1, max: 20 })
    .withMessage('Time must be a valid string'),

  body('numberOfPassengers')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Number of passengers must be at least 1'),

  body('serviceType')
    .optional()
    .isString()
    .isLength({ min: 1, max: 100 })
    .withMessage('Service type must be a valid string'),

  body('additionalInfo')
    .optional()
    .isLength({ max: 2000 })
    .withMessage('Additional info must not exceed 2000 characters')
    .escape(),

  body('vehicle')
    .optional()
    .custom(vehicle => {
      if (!vehicle) return true; // Vehicle is optional

      if (typeof vehicle !== 'object') {
        throw new Error('Vehicle must be an object');
      }

      return true;
    }),

  // Honeypot field
  body('website').optional().isEmpty().withMessage('Bot detected'),
];

// Rate limiting function
export function checkRateLimit(
  event: H3Event,
  type: keyof typeof RATE_LIMITS
): boolean {
  const clientIP = getClientIP(event) || 'unknown';
  const now = Date.now();
  const limit = RATE_LIMITS[type];

  const key = `${clientIP}:${type}`;
  const current = rateLimitStore.get(key);

  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + limit.windowMs });
    return true;
  }

  if (current.count >= limit.max) {
    return false;
  }

  current.count++;
  return true;
}

// Get client IP address
export function getClientIP(event: H3Event): string | undefined {
  const forwarded = getHeader(event, 'x-forwarded-for');
  const realIP = getHeader(event, 'x-real-ip');
  const cfConnectingIP = getHeader(event, 'cf-connecting-ip');

  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(',')[0].trim();

  return event.node.req.socket?.remoteAddress;
}

// File upload validation removed - no file uploads allowed
// export function validateFile(file: any): { valid: boolean; error?: string } {
//   return { valid: false, error: 'File uploads not allowed' };
// }

// Sanitize HTML content
export function sanitizeHTML(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Generate CSRF token
export function generateCSRFToken(): string {
  return randomBytes(32).toString('hex');
}

// Validate CSRF token
export function validateCSRFToken(event: H3Event, token: string): boolean {
  const sessionToken = getCookie(event, 'csrf-token');
  return sessionToken === token;
}

// Check for suspicious patterns
export function detectSuspiciousActivity(body: any): boolean {
  const suspiciousPatterns = [
    /script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<link/i,
    /<meta/i,
    /<style/i,
    /eval\s*\(/i,
    /expression\s*\(/i,
  ];

  const textToCheck = JSON.stringify(body).toLowerCase();

  return suspiciousPatterns.some(pattern => pattern.test(textToCheck));
}

// Log security events
export function logSecurityEvent(
  event: string,
  details: any,
  clientIP?: string
) {
  // console.warn(`[SECURITY] ${event}:`, {
  //   timestamp: new Date().toISOString(),
  //   clientIP,
  //   details,
  // });
}

// Validate and sanitize input
export async function validateInput(event: H3Event, validationRules: any[]) {
  const body = await readBody(event);

  // Check for suspicious activity
  if (detectSuspiciousActivity(body)) {
    logSecurityEvent('Suspicious input detected', body, getClientIP(event));
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid input detected',
    });
  }

  // Run validation
  for (const rule of validationRules) {
    await rule.run(body);
  }

  const errors = validationResult({ body });
  if (!errors.isEmpty()) {
    logSecurityEvent('Validation failed', errors.array(), getClientIP(event));
    throw createError({
      statusCode: 400,
      statusMessage: 'Validation failed',
      data: errors.array(),
    });
  }

  return body;
}
