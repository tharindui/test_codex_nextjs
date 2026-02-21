import { fetchAuctions, fetchProducts } from './catalog.api';

describe('catalog api', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fetchAuctions returns data payload', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ data: [{ id: 'car-1' }] })
      })
    );

    const data = await fetchAuctions();

    expect(data).toEqual([{ id: 'car-1' }]);
  });

  it('fetchProducts throws when request fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false
      })
    );

    await expect(fetchProducts()).rejects.toThrow('Failed to load products');
  });
});
