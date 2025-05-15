self.addEventListener('install', event => {
  console.log('[EchoCore] Service Worker installing.');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('[EchoCore] Service Worker activated.');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
