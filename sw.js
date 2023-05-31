var CACHE_NAME = 'offline-cache-v1';
var urlsToCache = [
    '/',
    'styles.css',
    'script.js'
    // Add more URLs to cache as needed
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
