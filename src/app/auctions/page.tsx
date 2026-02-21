'use client';

import { useEffect, useState } from 'react';

import { AuctionGrid } from '@/components/organisms/AuctionGrid';
import { PageShell } from '@/components/templates/PageShell';
import type { CarAuction } from '@/types/catalog';

export default function AuctionsPage() {
  const [auctions, setAuctions] = useState<CarAuction[]>([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch('/api/cars');
      const result = (await response.json()) as { data: CarAuction[] };
      setAuctions(result.data);
    };

    void load();
  }, []);

  return (
    <PageShell>
      <h1 className="mb-6 text-3xl font-bold">Cars in Auction</h1>
      <AuctionGrid auctions={auctions} />
    </PageShell>
  );
}
