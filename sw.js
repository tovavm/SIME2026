/*
  v1 — 2026-05-15: first launch SIME Roma
  v2 — 2026-05-20: multilingual, laser, manager notes, contact priority
  v3 — 2026-05-20: order tab, products.js, IVA, mailto send
  v5 — 2026-05-20: украинский язык (УК)
*/
const CACHE = 'melicor-v5';
const ASSETS = ['./', './index.html', './products.js', './icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
