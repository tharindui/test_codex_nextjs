import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { AppProviders } from '@/contexts/providers/AppProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js Car Auction Store',
  description: 'Auction, shop, cart, and checkout demo built with clean architecture and atomic design'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
