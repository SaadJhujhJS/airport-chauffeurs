import { H3Event } from 'h3';

export default eventHandler(async event => {
  // Set security headers
  setHeader(event, 'X-Content-Type-Options', 'nosniff');
  setHeader(event, 'X-Frame-Options', 'DENY');
  setHeader(event, 'X-XSS-Protection', '1; mode=block');
  setHeader(event, 'Referrer-Policy', 'strict-origin-when-cross-origin');
  setHeader(
    event,
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );

  // Content Security Policy
  setHeader(
    event,
    'Content-Security-Policy',
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' data:; " +
      "connect-src 'self'; " +
      "frame-ancestors 'none';"
  );

  // Rate limiting for API routes
  if (event.node.req.url?.startsWith('/api/')) {
    const clientIP = getClientIP(event);

    // Basic IP-based rate limiting
    const rateLimitKey = `rate_limit_${clientIP}`;
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 100; // 100 requests per 15 minutes for general API

    // This is a simplified rate limiting - in production, use Redis
    const rateLimitData = await getStorage().getItem(rateLimitKey);

    if (rateLimitData) {
      const { count, resetTime } = JSON.parse(rateLimitData);

      if (now < resetTime) {
        if (count >= maxRequests) {
          throw createError({
            statusCode: 429,
            statusMessage: 'Too many requests',
          });
        }
      } else {
        // Reset counter
        await getStorage().setItem(
          rateLimitKey,
          JSON.stringify({ count: 1, resetTime: now + windowMs })
        );
      }
    } else {
      await getStorage().setItem(
        rateLimitKey,
        JSON.stringify({ count: 1, resetTime: now + windowMs })
      );
    }
  }
});

// Helper function to get client IP
function getClientIP(event: H3Event): string {
  const forwarded = getHeader(event, 'x-forwarded-for');
  const realIP = getHeader(event, 'x-real-ip');
  const cfConnectingIP = getHeader(event, 'cf-connecting-ip');

  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(',')[0].trim();

  return event.node.req.socket?.remoteAddress || 'unknown';
}

// Declare global type for rate limit storage
declare global {
  var rateLimitStorage: Map<string, string> | undefined;
}

// Helper function to get storage (simplified - in production use Redis)
function getStorage() {
  // This is a simplified in-memory storage
  // In production, replace with Redis or similar
  return {
    async getItem(key: string) {
      return globalThis.rateLimitStorage?.get(key);
    },
    async setItem(key: string, value: string) {
      if (!globalThis.rateLimitStorage) {
        globalThis.rateLimitStorage = new Map();
      }
      globalThis.rateLimitStorage.set(key, value);
    },
  };
}
