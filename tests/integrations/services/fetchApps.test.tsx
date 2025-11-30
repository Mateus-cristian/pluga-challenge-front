import { fetchApps } from '@/modules/integrations/services/fetchApps';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: false,
    status: 500,
    statusText: 'Internal Server Error',
    json: () => Promise.resolve([]),
  } as Response)
) as any;

describe('fetchApps', () => {
  it('throws error when fetch fails', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('API is down')));
    await expect(fetchApps()).rejects.toThrow();
  });

  it('throws error on failure', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        statusText: 'Internal Server Error',
        json: () => Promise.resolve([]),
      } as Response)
    ) as any;
    await expect(fetchApps()).rejects.toThrow('Erro ao buscar apps.');
  });
});
