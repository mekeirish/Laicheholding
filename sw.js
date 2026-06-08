const cacheName = 'Laicheholding-v1';
self.addEventListener('install', e => {
  self.skipWaiting(); // Force l'activation immédiate
  e.waitUntil(caches.open(cacheName).then(c => c.addAll(['./index.html', './manifest.json', './icon.png'])));
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim()); // Prend le contrôle des pages immédiatement
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
