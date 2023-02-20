export function mockFetch(url: RequestInfo | URL): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(void 0);
      console.log('FETCH', url);
    }, Math.max(Math.random() * 5500, 500));
  });
}

