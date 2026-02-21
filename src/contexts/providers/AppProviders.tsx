'use client';

import type { PropsWithChildren } from 'react';

import { CartProvider } from '@/contexts/CartContext';
import { QueryProvider } from '@/contexts/providers/QueryProvider';

export function AppProviders({ children }: PropsWithChildren) {
  return (
    <QueryProvider>
      <CartProvider>{children}</CartProvider>
    </QueryProvider>
  );
}
