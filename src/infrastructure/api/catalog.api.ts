import type { CarAuction, Product } from '@/types/catalog';

type ApiResponse<T> = { data: T };

export async function fetchAuctions(): Promise<CarAuction[]> {
  const response = await fetch('/api/cars');
  if (!response.ok) {
    throw new Error('Failed to load auctions');
  }

  const result = (await response.json()) as ApiResponse<CarAuction[]>;
  return result.data;
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error('Failed to load products');
  }

  const result = (await response.json()) as ApiResponse<Product[]>;
  return result.data;
}
