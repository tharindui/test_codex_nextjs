import Link from 'next/link';
import type { PropsWithChildren } from 'react';

export function PageShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl gap-5 px-4 py-3 text-sm font-medium">
          <Link href="/auctions">Auctions</Link>
          <Link href="/shop">Shop + Cart</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
