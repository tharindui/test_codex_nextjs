'use client';

import { useState } from 'react';

import { Button } from '@/components/atoms/Button';
import { PageShell } from '@/components/templates/PageShell';
import { useCart } from '@/contexts/CartContext';

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  const placeOrder = () => {
    setPlaced(true);
    clearCart();
  };

  return (
    <PageShell>
      <h1 className="mb-6 text-3xl font-bold">Checkout</h1>
      {placed ? (
        <p className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-emerald-700">
          Order placed successfully.
        </p>
      ) : (
        <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          {items.length === 0 ? (
            <p className="text-slate-500">No items in cart. Go to Shop page to add products.</p>
          ) : (
            <ul className="space-y-2">
              {items.map((item) => (
                <li className="flex justify-between" key={item.product.id}>
                  <span>{item.product.name} × {item.quantity}</span>
                  <span>${(item.product.price * item.quantity).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="font-semibold">Total: ${total.toLocaleString()}</p>
          <Button disabled={items.length === 0} onClick={placeOrder}>
            Place Order
          </Button>
        </section>
      )}
    </PageShell>
  );
}
