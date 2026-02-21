'use client';

import { useEffect, useState } from 'react';

import { CartSummary } from '@/components/organisms/CartSummary';
import { ProductGrid } from '@/components/organisms/ProductGrid';
import { PageShell } from '@/components/templates/PageShell';
import type { Product } from '@/types/catalog';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('/api/products');
      const result = (await response.json()) as { data: Product[] };
      setProducts(result.data);
    };

    void load();
  }, []);

  return (
    <PageShell>
      <h1 className="mb-6 text-3xl font-bold">Product Details & Add to Cart</h1>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ProductGrid products={products} />
        <CartSummary />
      </div>
    </PageShell>
  );
}
