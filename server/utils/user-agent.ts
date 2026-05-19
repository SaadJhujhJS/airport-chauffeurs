/**
 * User Agent parsing utilities for browser and OS detection
 */

/**
 * Detects browser name from user agent string
 *
 * @param userAgent - User agent string from request headers
 * @returns Browser name or "Unknown Browser"
 *
 * @example
 * getBrowserName("Mozilla/5.0... Chrome/91.0...") // Returns "Google Chrome"
 */
export function getBrowserName(userAgent: string): string {
  if (!userAgent || typeof userAgent !== 'string') {
    return 'Unknown Browser';
  }

  const ua = userAgent.toLowerCase();

  // Check in order of specificity (most specific first)

  // Microsoft Edge (check before Chrome since Edge contains "chrome")
  if (ua.includes('edg') && !ua.includes('edgios')) {
    return 'Microsoft Edge';
  }

  // Opera (check before Chrome since Opera contains "chrome")
  if (ua.includes('opr') || ua.includes('opera')) {
    return 'Opera Browser';
  }

  // Brave (check before Chrome since Brave contains "chrome")
  if (ua.includes('brave')) {
    return 'Brave Browser';
  }

  // Google Chrome (must not be Edge, Opera, or Brave)
  if (
    ua.includes('chrome') &&
    !ua.includes('edg') &&
    !ua.includes('opr') &&
    !ua.includes('opera')
  ) {
    return 'Google Chrome';
  }

  // Mozilla Firefox
  if (ua.includes('firefox')) {
    return 'Mozilla Firefox';
  }

  // Apple Safari (must not be Chrome-based)
  if (ua.includes('safari') && !ua.includes('chrome')) {
    return 'Apple Safari';
  }

  // Internet Explorer (legacy)
  if (ua.includes('msie') || ua.includes('trident')) {
    return 'Internet Explorer';
  }

  return 'Unknown Browser';
}

/**
 * Detects operating system name from user agent string
 *
 * @param userAgent - User agent string from request headers
 * @returns OS name or "Unknown OS"
 *
 * @example
 * getOSName("Mozilla/5.0 (Windows NT 10.0...)") // Returns "Windows"
 */
export function getOSName(userAgent: string): string {
  if (!userAgent || typeof userAgent !== 'string') {
    return 'Unknown OS';
  }

  const ua = userAgent.toLowerCase();

  // Mobile devices first (more specific)
  if (ua.includes('iphone')) {
    return 'iOS';
  }

  if (ua.includes('ipad')) {
    return 'iOS';
  }

  if (ua.includes('ipod')) {
    return 'iOS';
  }

  if (ua.includes('android')) {
    return 'Android';
  }

  // Desktop operating systems
  if (ua.includes('win')) {
    return 'Windows';
  }

  if (ua.includes('mac')) {
    return 'macOS';
  }

  if (ua.includes('linux')) {
    return 'Linux';
  }

  // Other mobile/embedded
  if (ua.includes('blackberry')) {
    return 'BlackBerry';
  }

  if (ua.includes('windows phone')) {
    return 'Windows Mobile';
  }

  return 'Unknown OS';
}

/**
 * Extracts device type from user agent string
 *
 * @param userAgent - User agent string from request headers
 * @returns "Mobile", "Tablet", or "Desktop"
 */
export function getDeviceType(
  userAgent: string
): 'Mobile' | 'Tablet' | 'Desktop' {
  if (!userAgent || typeof userAgent !== 'string') {
    return 'Desktop';
  }

  const ua = userAgent.toLowerCase();

  // Check for mobile indicators
  if (
    ua.includes('mobile') ||
    ua.includes('android') ||
    ua.includes('iphone')
  ) {
    // Distinguish between mobile and tablet
    if (ua.includes('tablet') || ua.includes('ipad')) {
      return 'Tablet';
    }
    return 'Mobile';
  }

  return 'Desktop';
}
