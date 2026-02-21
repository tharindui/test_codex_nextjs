import type { CartItem } from '@/domain/entities/cart';
import type { Product } from '@/types/catalog';

export type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
};
