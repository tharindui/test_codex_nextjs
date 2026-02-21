import { catalogRepository } from './catalog.repository';

describe('catalogRepository', () => {
  it('returns auction data', async () => {
    const auctions = await catalogRepository.getCarAuctions();

    expect(auctions.length).toBeGreaterThan(0);
    expect(auctions[0]).toHaveProperty('id');
    expect(auctions[0]).toHaveProperty('currentBid');
  });

  it('returns product data', async () => {
    const products = await catalogRepository.getProducts();

    expect(products.length).toBeGreaterThan(0);
    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('price');
  });
});
