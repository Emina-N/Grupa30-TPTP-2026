const CACHE_NAME = 'tptp-v1';
// Lista datoteka koje aplikacija sprema za offline rad
const ASSETS = [
  'index.html',
  'sadrzaj.html',
  'kontakt.html',
  'css/tptpstil.css',
  'js/tptpskripte.js',
  'images/logo.jpg'
];

// Instalacija i keširanje resursa
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Aktivacija i čišćenje starih keševa
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
});

// Presretanje mreže: ako nema interneta, povuci iz keša
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});