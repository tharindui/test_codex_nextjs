'use client';

import Link from 'next/link';

import { Button } from '@/components/atoms/Button';
import { useCart } from '@/contexts/CartContext';

export function CartSummary() {
  const { items, total, updateQuantity } = useCart();

  if (items.length === 0) {
    return <p className="rounded-xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-500">Your cart is empty.</p>;
  }

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold">Cart</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li className="flex items-center justify-between" key={item.product.id}>
            <div>
              <p className="font-medium">{item.product.name}</p>
              <p className="text-sm text-slate-500">${item.product.price} each</p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="px-3 py-1" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>-</Button>
              <span>{item.quantity}</span>
              <Button className="px-3 py-1" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>+</Button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-right font-semibold">Total: ${total.toLocaleString()}</p>
      <div className="mt-4 text-right">
        <Link className="text-sm font-semibold text-primary-600 hover:underline" href="/checkout">
          Go to Checkout →
        </Link>
      </div>
    </section>
  );
}
