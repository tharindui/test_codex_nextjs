import { NextResponse } from 'next/server';

import { getProducts } from '@/application/use-cases/get-products';

export async function GET() {
  const products = await getProducts();
  return NextResponse.json({ data: products });
}
