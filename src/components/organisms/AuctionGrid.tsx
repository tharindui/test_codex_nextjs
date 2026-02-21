import { Card } from '@/components/atoms/Card';
import { PriceTag } from '@/components/molecules/PriceTag';
import type { CarAuction } from '@/types/catalog';

export function AuctionGrid({ auctions }: { auctions: CarAuction[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {auctions.map((auction) => (
        <Card key={auction.id}>
          <img alt={`${auction.make} ${auction.model}`} className="h-40 w-full rounded-md object-cover" src={auction.image} />
          <div className="mt-3 space-y-1">
            <h3 className="text-base font-semibold">{auction.year} {auction.make} {auction.model}</h3>
            <PriceTag amount={auction.currentBid} />
            <p className="text-sm text-slate-500">Ends: {new Date(auction.endsAt).toLocaleString()}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
