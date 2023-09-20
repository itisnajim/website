const CACHE_NAME = 'itisnajim-pwa-cache-v1'; // Change this to a unique name for your PWA cache

const cacheUrls = [
  '/',
  '/index.html',
  '/manifest.json',
  '/styles.css',
  '/script.js',
  '/logo.png',
  '/logo-light.png',
  'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;700&display=swap',
  'https://kit.fontawesome.com/0df2f3ee27.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheUrls);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
