'use client';

import { useAuctionsQuery } from '@/application/hooks/useCatalogQueries';
import { AuctionGrid } from '@/components/organisms/AuctionGrid';
import { PageShell } from '@/components/templates/PageShell';

export default function AuctionsPage() {
  const { data: auctions = [], isLoading, isError } = useAuctionsQuery();

  return (
    <PageShell>
      <h1 className="mb-6 text-3xl font-bold">Cars in Auction</h1>
      {isLoading && <p className="text-sm text-slate-500">Loading auctions...</p>}
      {isError && <p className="text-sm text-red-600">Unable to load auctions. Please try again.</p>}
      {!isLoading && !isError && <AuctionGrid auctions={auctions} />}
    </PageShell>
  );
}
