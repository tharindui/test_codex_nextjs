import type { Product } from '@/types/catalog';

export type CartItem = {
  product: Product;
  quantity: number;
};
