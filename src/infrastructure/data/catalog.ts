import type { CarAuction, Product } from '@/types/catalog';

export const carAuctionsData: CarAuction[] = [
  {
    id: 'car-1',
    make: 'Tesla',
    model: 'Model Y',
    year: 2023,
    currentBid: 46000,
    endsAt: '2026-03-10T10:00:00Z',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'car-2',
    make: 'BMW',
    model: 'i4',
    year: 2022,
    currentBid: 42000,
    endsAt: '2026-03-12T13:30:00Z',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'car-3',
    make: 'Audi',
    model: 'e-tron GT',
    year: 2024,
    currentBid: 73000,
    endsAt: '2026-03-14T16:45:00Z',
    image: 'https://images.unsplash.com/photo-1617531653520-4893f7f7c7e3?w=1200&auto=format&fit=crop&q=80'
  }
];

export const productsData: Product[] = [
  {
    id: 'prod-1',
    name: 'Sport Steering Wheel',
    description: 'Premium leather steering wheel with integrated controls.',
    price: 299,
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'prod-2',
    name: 'Performance Brake Kit',
    description: 'High-performance brake kit for improved stopping power.',
    price: 799,
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=1200&auto=format&fit=crop&q=80'
  },
  {
    id: 'prod-3',
    name: 'Ceramic Coating Pack',
    description: 'Professional-grade coating pack for long-lasting paint protection.',
    price: 199,
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&auto=format&fit=crop&q=80'
  }
];
