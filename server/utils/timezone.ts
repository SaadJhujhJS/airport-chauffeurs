/**
 * Timezone utilities for extracting location information from timezone strings
 */

// Comprehensive timezone to country mapping
// Format: lowercase timezone identifier -> country name
const TIMEZONE_TO_COUNTRY: Readonly<Record<string, string>> = {
  // Asia
  'asia/karachi': 'Pakistan',
  'asia/islamabad': 'Pakistan',
  'asia/lahore': 'Pakistan',
  'asia/dubai': 'UAE',
  'asia/abu_dhabi': 'UAE',
  'asia/singapore': 'Singapore',
  'asia/kuala_lumpur': 'Malaysia',
  'asia/bangkok': 'Thailand',
  'asia/mumbai': 'India',
  'asia/delhi': 'India',
  'asia/kolkata': 'India',
  'asia/jakarta': 'Indonesia',
  'asia/manila': 'Philippines',
  'asia/dhaka': 'Bangladesh',
  'asia/colombo': 'Sri Lanka',
  'asia/tokyo': 'Japan',
  'asia/seoul': 'South Korea',
  'asia/hong_kong': 'Hong Kong',
  'asia/taipei': 'Taiwan',
  'asia/sydney': 'Australia',
  'asia/melbourne': 'Australia',
  'asia/brisbane': 'Australia',
  'asia/perth': 'Australia',
  'asia/adelaide': 'Australia',
  'asia/darwin': 'Australia',
  'asia/hobart': 'Australia',

  // Europe
  'europe/london': 'United Kingdom',
  'europe/paris': 'France',
  'europe/berlin': 'Germany',
  'europe/madrid': 'Spain',
  'europe/rome': 'Italy',
  'europe/amsterdam': 'Netherlands',
  'europe/brussels': 'Belgium',
  'europe/athens': 'Greece',
  'europe/lisbon': 'Portugal',
  'europe/dublin': 'Ireland',
  'europe/stockholm': 'Sweden',
  'europe/oslo': 'Norway',
  'europe/copenhagen': 'Denmark',
  'europe/helsinki': 'Finland',
  'europe/warsaw': 'Poland',
  'europe/prague': 'Czech Republic',
  'europe/vienna': 'Austria',
  'europe/zurich': 'Switzerland',
  'europe/moscow': 'Russia',

  // Americas
  'america/new_york': 'United States',
  'america/los_angeles': 'United States',
  'america/chicago': 'United States',
  'america/denver': 'United States',
  'america/phoenix': 'United States',
  'america/anchorage': 'United States',
  'america/toronto': 'Canada',
  'america/vancouver': 'Canada',
  'america/montreal': 'Canada',
  'america/edmonton': 'Canada',
  'america/winnipeg': 'Canada',
  'america/halifax': 'Canada',
  'america/sao_paulo': 'Brazil',
  'america/rio_de_janeiro': 'Brazil',
  'america/mexico_city': 'Mexico',
  'america/buenos_aires': 'Argentina',
  'america/santiago': 'Chile',
  'america/lima': 'Peru',
  'america/bogota': 'Colombia',

  // Africa
  'africa/cairo': 'Egypt',
  'africa/johannesburg': 'South Africa',
  'africa/casablanca': 'Morocco',
  'africa/lagos': 'Nigeria',
  'africa/nairobi': 'Kenya',

  // Pacific
  'pacific/auckland': 'New Zealand',
  'pacific/honolulu': 'United States',
  'pacific/fiji': 'Fiji',
} as const;

// Country name mapping for region-based timezones
const REGION_TO_COUNTRY: Readonly<Record<string, string>> = {
  australia: 'Australia',
  america: 'Americas',
  europe: 'Europe',
  asia: 'Asia',
  africa: 'Africa',
  pacific: 'Pacific',
  atlantic: 'Atlantic',
  indian: 'Indian Ocean',
  antarctica: 'Antarctica',
} as const;

/**
 * Extracts country name from a timezone identifier
 *
 * @param timezone - IANA timezone identifier (e.g., "Asia/Karachi", "America/New_York")
 * @returns Country name or formatted region name, or "—" if invalid
 *
 * @example
 * getLocationFromTimezone("Asia/Karachi") // Returns "Pakistan"
 * getLocationFromTimezone("Australia/Sydney") // Returns "Australia"
 * getLocationFromTimezone("Invalid") // Returns "—"
 */
export function getLocationFromTimezone(timezone: string): string {
  // Validate input
  if (!timezone || typeof timezone !== 'string') {
    return '—';
  }

  // Normalize timezone to lowercase for lookup
  const normalizedTimezone = timezone.trim().toLowerCase();

  // Check exact match in timezone-to-country mapping
  if (TIMEZONE_TO_COUNTRY[normalizedTimezone]) {
    return TIMEZONE_TO_COUNTRY[normalizedTimezone];
  }

  // Parse timezone parts (format: "region/city" or "region/subregion/city")
  const parts = normalizedTimezone.split('/');

  if (parts.length === 0 || !parts[0]) {
    return '—';
  }

  const region = parts[0].trim();

  // Check if region maps to a country
  if (REGION_TO_COUNTRY[region]) {
    return REGION_TO_COUNTRY[region];
  }

  // Fallback: format the region name nicely
  return formatRegionName(region);
}

/**
 * Formats a region name to a readable format
 *
 * @param region - Region string (e.g., "asia", "america")
 * @returns Formatted region name (e.g., "Asia", "America")
 */
function formatRegionName(region: string): string {
  return region
    .split(/[_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Gets the default timezone for the server
 *
 * @returns IANA timezone identifier
 */
export function getDefaultTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

/**
 * Validates if a timezone string is a valid IANA timezone
 *
 * @param timezone - Timezone string to validate
 * @returns true if valid, false otherwise
 */
export function isValidTimezone(timezone: string): boolean {
  if (!timezone || typeof timezone !== 'string') {
    return false;
  }

  try {
    // Try to create a date formatter with the timezone
    Intl.DateTimeFormat(undefined, { timeZone: timezone });
    return true;
  } catch {
    return false;
  }
}
