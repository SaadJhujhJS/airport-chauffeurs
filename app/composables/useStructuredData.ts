import { useHead, useRequestURL, useRuntimeConfig } from '#imports';

type JsonLd = Record<string, unknown>;

const getBaseUrl = (): string => {
  const config = useRuntimeConfig();
  const fallback =
    (config.public.SITE_URL as string | undefined) ||
    (import.meta.client
      ? useRequestURL().origin
      : 'https://airportchauffeurs.com.au');
  return String(fallback).replace(/\/$/, '');
};

const absoluteUrl = (path: string): string => {
  if (!path) return getBaseUrl();
  if (path.startsWith('http')) return path;
  const base = getBaseUrl();
  return path.startsWith('/') ? `${base}${path}` : `${base}/${path}`;
};

export const useStructuredData = (
  data: JsonLd | JsonLd[],
  key?: string
): void => {
  const items = Array.isArray(data) ? data : [data];
  useHead({
    script: items.map((item, idx) => ({
      type: 'application/ld+json',
      key: key ? `${key}-${idx}` : undefined,
      innerHTML: JSON.stringify(item),
    })),
  });
};

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export const breadcrumbSchema = (items: BreadcrumbItem[]): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  image?: string;
  serviceType?: string;
  areaServed?: string | string[];
}

export const serviceSchema = (input: ServiceSchemaInput): JsonLd => {
  const base = getBaseUrl();
  const areaServed = input.areaServed || ['Australia'];
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(input.path)}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType || 'Chauffeur Service',
    url: absoluteUrl(input.path),
    image: input.image ? absoluteUrl(input.image) : undefined,
    provider: { '@id': `${base}/#organization` },
    areaServed: Array.isArray(areaServed)
      ? areaServed.map(name => ({ '@type': 'Place', name }))
      : { '@type': 'Place', name: areaServed },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${base}/booking`,
      servicePhone: '+61461302970',
    },
  };
};

export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqSchema = (items: FaqEntry[]): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
});

export interface ItemListEntry {
  name: string;
  path: string;
  description?: string;
  image?: string;
}

export const itemListSchema = (
  items: ItemListEntry[],
  listName: string
): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: listName,
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.path),
    image: item.image ? absoluteUrl(item.image) : undefined,
    description: item.description,
  })),
});

export interface VehicleEntry {
  name: string;
  category: string;
  image?: string;
  fuel?: string;
  year?: string;
  passengers?: string;
}

export const vehicleListSchema = (vehicles: VehicleEntry[]): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Premium Chauffeur Fleet',
  numberOfItems: vehicles.length,
  itemListElement: vehicles.map((v, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Car',
      name: v.name,
      vehicleConfiguration: v.category,
      fuelType: v.fuel,
      vehicleModelDate: v.year,
      seatingCapacity: v.passengers,
      image: v.image ? absoluteUrl(v.image) : undefined,
      brand: { '@type': 'Brand', name: v.name.split(' ')[0] },
    },
  })),
});

export const webPageSchema = (input: {
  name: string;
  description: string;
  path: string;
  type?:
    | 'WebPage'
    | 'AboutPage'
    | 'ContactPage'
    | 'CollectionPage'
    | 'CheckoutPage';
  breadcrumb?: JsonLd;
}): JsonLd => {
  const base = getBaseUrl();
  return {
    '@context': 'https://schema.org',
    '@type': input.type || 'WebPage',
    '@id': `${absoluteUrl(input.path)}#webpage`,
    url: absoluteUrl(input.path),
    name: input.name,
    description: input.description,
    isPartOf: { '@id': `${base}/#website` },
    inLanguage: 'en-AU',
    breadcrumb: input.breadcrumb,
  };
};
