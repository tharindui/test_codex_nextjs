'use client';

import { Button } from '@/components/atoms/Button';
import { Card } from '@/components/atoms/Card';
import { PriceTag } from '@/components/molecules/PriceTag';
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/types/catalog';

export function ProductGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id}>
          <img alt={product.name} className="h-40 w-full rounded-md object-cover" src={product.image} />
          <h3 className="mt-3 text-base font-semibold">{product.name}</h3>
          <p className="text-sm text-slate-600">{product.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <PriceTag amount={product.price} />
            <Button onClick={() => addItem(product)}>Add to Cart</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
