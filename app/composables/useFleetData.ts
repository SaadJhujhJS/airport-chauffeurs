export interface VehicleSpecs {
  engine: string;
  transmission: string;
  fuel: string;
  year: string;
  amenities: string[];
}

export interface Vehicle {
  id: string;
  name: string;
  category: string;
  image: string;
  images: string[];
  passengers: string;
  luggage: string;
  features: string;
  specifications: VehicleSpecs;
  price?: {
    base: string;
    airport: string;
  };
}

export interface FleetCategory {
  id: string;
  name: string;
  label: string;
  icon: string;
  description: string;
  capacity: string;
  luggage: string;
}

export const useFleetData = () => {
  const categories: FleetCategory[] = [
    {
      id: 'all',
      name: 'all',
      label: 'All Vehicles',
      icon: '🚗',
      description: 'All available vehicle categories',
      capacity: '3-12 Passengers',
      luggage: '2-8 Large + 2-5 Carry-on',
    },
    {
      id: 'executiveSedans',
      name: 'executiveSedans',
      label: 'Executive Sedans',
      icon: '🚗',
      description:
        'Premium executive sedans with luxury amenities and professional chauffeurs.',
      capacity: '3 Passengers',
      luggage: '2 Large + 2 Carry-on',
    },
    {
      id: 'premiumSedans',
      name: 'premiumSedans',
      label: 'Premium Sedans',
      icon: '⭐',
      description:
        'Top-tier luxury sedans with advanced features and maximum comfort.',
      capacity: '3 Passengers',
      luggage: '2 Large + 2 Carry-on',
    },
    {
      id: 'premiumSUVs',
      name: 'premiumSUVs',
      label: 'Premium SUVs',
      icon: '🚙',
      description: 'Spacious luxury SUVs ideal for families and group travel.',
      capacity: '4 Passengers',
      luggage: '3 Large + 3 Carry-on',
    },
    {
      id: 'electricVehicles',
      name: 'electricVehicles',
      label: 'Electric Vehicles',
      icon: '⚡',
      description:
        'Eco-friendly electric vehicles with cutting-edge technology.',
      capacity: '4-6 Passengers',
      luggage: '3-5 Large + 2-3 Carry-on',
    },
    {
      id: 'luxuryMinibuses',
      name: 'luxuryMinibuses',
      label: 'Luxury Minibuses',
      icon: '🚌',
      description:
        'Large capacity luxury vehicles for corporate groups and special events.',
      capacity: '8-12 Passengers',
      luggage: '6-8 Large + 4-5 Carry-on',
    },
    {
      id: 'vans',
      name: 'vans',
      label: 'Vans',
      icon: '🚐',
      description:
        'Spacious vans perfect for families and group travel with comfort and reliability.',
      capacity: '7-8 Passengers',
      luggage: '4-6 Large + 3-4 Carry-on',
    },
  ];

  const fleetData: Record<string, Vehicle[]> = {
    executiveSedans: [
      {
        id: 'mercedes-e-class',
        name: 'Mercedes-Benz E-Class',
        category: 'Executive Sedan',
        image: '/images/vehicles/executive-sedans/mercedes-benz-e-class-1.avif',
        images: [
          '/images/vehicles/executive-sedans/mercedes-benz-e-class-1.avif',
          '/images/vehicles/executive-sedans/mercedes-benz-e-class-2.avif',
          '/images/vehicles/executive-sedans/mercedes-benz-e-class-3.jpg',
        ],
        passengers: '3',
        luggage: '2 Large + 2 Carry-on',
        features: 'Premium Interior, Advanced Safety, Executive Comfort',
        specifications: {
          engine: '2.0L Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Ambient Lighting',
          ],
        },
      },
      {
        id: 'bmw-5-series',
        name: 'BMW 5 Series',
        category: 'Executive Sedan',
        image: '/images/vehicles/executive-sedans/bmw-5-series-1.webp',
        images: [
          '/images/vehicles/executive-sedans/bmw-5-series-1.webp',
          '/images/vehicles/executive-sedans/bmw-5-series-2.jpg',
        ],
        passengers: '3',
        luggage: '2 Large + 2 Carry-on',
        features: 'Dynamic Performance, Luxury Interior, Advanced Technology',
        specifications: {
          engine: '3.0L Twin Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Premium Audio',
          ],
        },
      },
      {
        id: 'audi-a6',
        name: 'Audi A6',
        category: 'Executive Sedan',
        image: '/images/vehicles/executive-sedans/audi-a6-1.jpg',
        images: [
          '/images/vehicles/executive-sedans/audi-a6-1.jpg',
          '/images/vehicles/executive-sedans/audi-a6-2.jpeg',
        ],
        passengers: '3',
        luggage: '2 Large + 2 Carry-on',
        features: 'Quattro AWD, Virtual Cockpit, Executive Seating',
        specifications: {
          engine: '2.0L Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Quattro AWD',
          ],
        },
      },
    ],
    premiumSedans: [
      {
        id: 'mercedes-s-class',
        name: 'Mercedes-Benz S-Class',
        category: 'Premium Sedan',
        image: '/images/vehicles/premium-sedans/mercedes‑benz-s‑class-1.avif',
        images: [
          '/images/vehicles/premium-sedans/mercedes‑benz-s‑class-1.avif',
          '/images/vehicles/premium-sedans/mercedes‑benz-s‑class-2.jpg',
          '/images/vehicles/premium-sedans/mercedes‑benz-s‑class-3.avif',
        ],
        passengers: '3',
        luggage: '2 Large + 2 Carry-on',
        features: 'Executive Seats, Night Vision, Massage Seats',
        specifications: {
          engine: '4.4L V8 Twin Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Massage Seats',
            'Night Vision',
          ],
        },
      },
      {
        id: 'bmw-7-series',
        name: 'BMW 7 Series',
        category: 'Premium Sedan',
        image: '/images/vehicles/premium-sedans/bmw-7-series-1.jpg',
        images: [
          '/images/vehicles/premium-sedans/bmw-7-series-1.jpg',
          '/images/vehicles/premium-sedans/bmw-7-series-2.avif',
        ],
        passengers: '3',
        luggage: '2 Large + 2 Carry-on',
        features: 'Executive Lounge, Advanced Safety, Luxury Interior',
        specifications: {
          engine: '4.4L V8 Twin Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Executive Lounge',
            'Advanced Safety',
          ],
        },
      },
      {
        id: 'audi-a8',
        name: 'Audi A8',
        category: 'Premium Sedan',
        image: '/images/vehicles/premium-sedans/audi-a8-1.jpeg',
        images: [
          '/images/vehicles/premium-sedans/audi-a8-1.jpeg',
          '/images/vehicles/premium-sedans/audi-a8-2.jpg',
        ],
        passengers: '3',
        luggage: '2 Large + 2 Carry-on',
        features: 'Quattro AWD, Virtual Cockpit, Premium Interior',
        specifications: {
          engine: '3.0L V6 Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Quattro AWD',
            'Virtual Cockpit',
          ],
        },
      },
      {
        id: 'lexus-ls500',
        name: 'Lexus LS 500',
        category: 'Premium Sedan',
        image: '/images/vehicles/premium-sedans/lexus-ls-500-2.png',
        images: [
          '/images/vehicles/premium-sedans/lexus-ls-500-2.png',
          '/images/vehicles/premium-sedans/lexus-ls-500-1.avif',
        ],
        passengers: '3',
        luggage: '2 Large + 2 Carry-on',
        features: 'Luxury Interior, Advanced Safety, Hybrid Technology',
        specifications: {
          engine: '3.5L V6 Hybrid',
          transmission: 'Automatic',
          fuel: 'Hybrid',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Advanced Safety',
            'Hybrid Technology',
          ],
        },
      },
    ],
    premiumSUVs: [
      {
        id: 'bmw-x5',
        name: 'BMW X5',
        category: 'Premium SUV',
        image: '/images/vehicles/premium-suvs/bmw-x5-4.jpg',
        images: [
          '/images/vehicles/premium-suvs/bmw-x5-4.jpg',
          '/images/vehicles/premium-suvs/bmw-x5-2.jpg',
          '/images/vehicles/premium-suvs/bmw-x5-3.webp',
        ],
        passengers: '4',
        luggage: '3 Large + 3 Carry-on',
        features: 'xDrive AWD, Spacious Interior, Advanced Technology',
        specifications: {
          engine: '3.0L V6 Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'xDrive AWD',
            'Spacious Interior',
          ],
        },
      },
      {
        id: 'mercedes-gls',
        name: 'Mercedes-Benz GLS',
        category: 'Premium SUV',
        image: '/images/vehicles/premium-suvs/mercedes‑benz-gls-1.avif',
        images: [
          '/images/vehicles/premium-suvs/mercedes‑benz-gls-1.avif',
          '/images/vehicles/premium-suvs/mercedes‑benz-gls-2.webp',
          '/images/vehicles/premium-suvs/mercedes‑benz-gls-4.avif',
        ],
        passengers: '4',
        luggage: '3 Large + 3 Carry-on',
        features: '4MATIC AWD, Air Suspension, Premium Interior',
        specifications: {
          engine: '3.0L V6 Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            '4MATIC AWD',
            'Air Suspension',
          ],
        },
      },
      {
        id: 'audi-q7',
        name: 'Audi Q7',
        category: 'Premium SUV',
        image: '/images/vehicles/premium-suvs/audi-q7-4.jpeg',
        images: [
          '/images/vehicles/premium-suvs/audi-q7-4.jpeg',
          '/images/vehicles/premium-suvs/audi-q7-2.avif',
        ],
        passengers: '4',
        luggage: '3 Large + 3 Carry-on',
        features: 'Quattro AWD, Virtual Cockpit, Spacious Interior',
        specifications: {
          engine: '3.0L V6 Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Quattro AWD',
            'Virtual Cockpit',
          ],
        },
      },
    ],
    electricVehicles: [
      {
        id: 'tesla-model-s',
        name: 'Tesla Model S',
        category: 'Electric Sedan',
        image: '/images/vehicles/electric/tesla-model-s-4.avif',
        images: [
          '/images/vehicles/electric/tesla-model-s-4.avif',
          '/images/vehicles/electric/tesla-model-s-2.jpg',
        ],
        passengers: '4',
        luggage: '3-4 Large + 1-2 Carry-on',
        features: 'Autopilot, Long Range, Electric Power',
        specifications: {
          engine: 'Electric',
          transmission: 'Automatic',
          fuel: 'Electric',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Autopilot',
            'Long Range',
          ],
        },
      },
      {
        id: 'tesla-model-x',
        name: 'Tesla Model X',
        category: 'Electric SUV',
        image: '/images/vehicles/electric/tesla-model-x-4.webp',
        images: [
          '/images/vehicles/electric/tesla-model-x-4.webp',
          '/images/vehicles/electric/tesla-model-x-2.jpg',
        ],
        passengers: '6',
        luggage: '4-5 Large + 2-3 Carry-on',
        features: 'Autopilot, Falcon Doors, Zero Emissions',
        specifications: {
          engine: 'Electric',
          transmission: 'Automatic',
          fuel: 'Electric',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Autopilot',
            'Falcon Doors',
          ],
        },
      },
      {
        id: 'mercedes-eqs',
        name: 'Mercedes EQS',
        category: 'Electric Sedan',
        image: '/images/vehicles/electric/mercedes-eqs-3.jpg',
        images: [
          '/images/vehicles/electric/mercedes-eqs-3.jpg',
          '/images/vehicles/electric/mercedes-eqs-2.webp',
        ],
        passengers: '4',
        luggage: '3-4 Large + 1-2 Carry-on',
        features: 'MBUX Hyperscreen, Electric Luxury, Advanced Technology',
        specifications: {
          engine: 'Electric',
          transmission: 'Automatic',
          fuel: 'Electric',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'MBUX Hyperscreen',
            'Electric Luxury',
          ],
        },
      },
      {
        id: 'bmw-i7',
        name: 'BMW i7',
        category: 'Electric Sedan',
        image: '/images/vehicles/electric/bmw-i7-3.jpg',
        images: [
          '/images/vehicles/electric/bmw-i7-3.jpg',
          '/images/vehicles/electric/bmw-i7-2.avif',
        ],
        passengers: '4',
        luggage: '3-4 Large + 1-2 Carry-on',
        features: 'Electric Luxury, Advanced Technology, Executive Comfort',
        specifications: {
          engine: 'Electric',
          transmission: 'Automatic',
          fuel: 'Electric',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Electric Luxury',
            'Advanced Technology',
          ],
        },
      },
    ],
    luxuryMinibuses: [
      {
        id: 'toyota-granvia',
        name: 'Toyota Granvia',
        category: 'Luxury Minibus',
        image: '/images/vehicles/luxury-minibus/toyota-granvia-4.avif',
        images: [
          '/images/vehicles/luxury-minibus/toyota-granvia-4.avif',
          '/images/vehicles/luxury-minibus/toyota-granvia-2.webp',
          '/images/vehicles/luxury-minibus/toyota-granvia-3.avif',
        ],
        passengers: '8',
        luggage: '6 Large + 4 Carry-on',
        features:
          'Reliable Performance, Comfortable Seating, Advanced Features',
        specifications: {
          engine: '2.8L Diesel',
          transmission: 'Automatic',
          fuel: 'Diesel',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Reliable Performance',
            'Comfortable Seating',
          ],
        },
      },
      {
        id: 'mercedes-sprinter-luxury',
        name: 'Mercedes Sprinter (Luxury Minibus)',
        category: 'Luxury Minibus',
        image: '/images/vehicles/luxury-minibus/mercedes‑benz-sprinter-1.jpg',
        images: [
          '/images/vehicles/luxury-minibus/mercedes‑benz-sprinter-1.jpg',
          '/images/vehicles/luxury-minibus/mercedes‑benz-sprinter-2.webp',
        ],
        passengers: '12',
        luggage: '8 Large + 5 Carry-on',
        features: 'Air Conditioning, Reclining Seats, WiFi Available',
        specifications: {
          engine: '3.0L V6 Turbo',
          transmission: 'Automatic',
          fuel: 'Diesel',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Air Conditioning',
            'Reclining Seats',
          ],
        },
      },
    ],
    vans: [
      {
        id: 'mercedes-v-class',
        name: 'Mercedes-Benz V-Class (Viano)',
        category: 'Van',
        image: '/images/vehicles/luxury-minibus/mercedes‑benz-v‑class-1.avif',
        images: [
          '/images/vehicles/luxury-minibus/mercedes‑benz-v‑class-1.avif',
          '/images/vehicles/luxury-minibus/mercedes‑benz-v‑class-2.avif',
          '/images/vehicles/luxury-minibus/mercedes‑benz-v‑class-3.avif',
        ],
        passengers: '8',
        luggage: '6 Large + 4 Carry-on',
        features: 'Executive Seating, Privacy Glass, Climate Control',
        specifications: {
          engine: '2.0L Turbo',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Privacy Glass',
            'Executive Seating',
          ],
        },
      },
      {
        id: 'kia-carnival',
        name: 'Kia Carnival',
        category: 'Van',
        image: '/images/vehicles/vans/kia-carnival-1.jpg',
        images: [
          '/images/vehicles/vans/kia-carnival-1.jpg',
          '/images/vehicles/vans/kia-carnival-2.jpg',
          '/images/vehicles/vans/kia-carnival-3.jpg',
        ],
        passengers: '7',
        luggage: '4 Large + 3 Carry-on',
        features: 'Spacious Interior, Advanced Safety, Family-Friendly',
        specifications: {
          engine: '3.5L V6',
          transmission: 'Automatic',
          fuel: 'Petrol',
          year: '2024',
          amenities: [
            'WiFi',
            'Charging Ports',
            'Refreshments',
            'Professional Driver',
            'Spacious Interior',
            'Advanced Safety',
          ],
        },
      },
    ],
  };

  const getAllVehicles = (): Vehicle[] => {
    return Object.values(fleetData).flat();
  };

  const getVehiclesByCategory = (categoryId: string): Vehicle[] => {
    if (categoryId === 'all') {
      return getAllVehicles();
    }
    return fleetData[categoryId] || [];
  };

  const getVehicleById = (id: string): Vehicle | undefined => {
    return getAllVehicles().find(vehicle => vehicle.id === id);
  };

  const getCategoryLabel = (categoryId: string): string => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.label || 'Vehicle';
  };

  return {
    categories,
    fleetData,
    getAllVehicles,
    getVehiclesByCategory,
    getVehicleById,
    getCategoryLabel,
  };
};
