import { carAuctionsData, productsData } from '@/infrastructure/data/catalog';

export const catalogRepository = {
  getCarAuctions: async () => carAuctionsData,
  getProducts: async () => productsData
};
