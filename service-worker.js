const CACHE_NAME = "love-story-v1";

self.addEventListener("install", e => {
 e.waitUntil(
   caches.open(CACHE_NAME).then(cache =>
     cache.addAll([
       "./",
       "./index.html",
       "./style.css",
       "./script.js",
       "./image-192.png",
       "./image-512.png"
     ])
   )
 );
});

self.addEventListener("fetch", e => {
 e.respondWith(
   caches.match(e.request).then(r => r || fetch(e.request))
 );
});