// Service Worker v4 - Performance optimized
const CACHE = 'portfolio-v4';
const RUNTIME = 'runtime-v4';

const FILES = [
  '/',
  '/index.html',
  '/styles/main.min.css',
  '/styles/effects.min.css',
  '/assets/fontawesome/all.min.css'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(k => k !== CACHE && k !== RUNTIME ? caches.delete(k) : null))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  
  e.respondWith(
    caches.match(e.request).then(r => 
      r || fetch(e.request).then(res => {
        if (res.status === 200) {
          const clone = res.clone();
          caches.open(RUNTIME).then(c => c.put(e.request, clone));
        }
        return res;
      })
    )
  );
});
