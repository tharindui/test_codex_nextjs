'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchAuctions, fetchProducts } from '@/infrastructure/api/catalog.api';

export const catalogQueryKeys = {
  auctions: ['catalog', 'auctions'] as const,
  products: ['catalog', 'products'] as const
};

export function useAuctionsQuery() {
  return useQuery({
    queryKey: catalogQueryKeys.auctions,
    queryFn: fetchAuctions,
    staleTime: 60_000
  });
}

export function useProductsQuery() {
  return useQuery({
    queryKey: catalogQueryKeys.products,
    queryFn: fetchProducts,
    staleTime: 60_000
  });
}
