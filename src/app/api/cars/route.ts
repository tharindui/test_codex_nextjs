import { NextResponse } from 'next/server';

import { getAuctions } from '@/application/use-cases/get-auctions';

export async function GET() {
  const auctions = await getAuctions();
  return NextResponse.json({ data: auctions });
}
