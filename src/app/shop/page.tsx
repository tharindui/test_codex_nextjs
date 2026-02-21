'use client';

import { useProductsQuery } from '@/application/hooks/useCatalogQueries';
import { CartSummary } from '@/components/organisms/CartSummary';
import { ProductGrid } from '@/components/organisms/ProductGrid';
import { PageShell } from '@/components/templates/PageShell';

export default function ShopPage() {
  const { data: products = [], isLoading, isError } = useProductsQuery();

  return (
    <PageShell>
      <h1 className="mb-6 text-3xl font-bold">Product Details & Add to Cart</h1>
      {isLoading && <p className="mb-4 text-sm text-slate-500">Loading products...</p>}
      {isError && <p className="mb-4 text-sm text-red-600">Unable to load products. Please refresh.</p>}
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ProductGrid products={products} />
        <CartSummary />
      </div>
    </PageShell>
  );
}
