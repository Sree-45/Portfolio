const CACHE_NAME = 'sreeshanth-portfolio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/icon.png'
  // We'll add more assets later after they're properly created
];

// Install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(error => console.log('Cache error:', error))
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached response if found
        if (response) {
          return response;
        }
        
        // Clone the request to ensure it's safe to use
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              // Don't cache URLs with query strings or special characters
              if (!event.request.url.includes('?') && 
                  !event.request.url.includes('%')) {
                cache.put(event.request, responseToCache);
              }
            });
            
          return response;
        })
        .catch(error => {
          console.log('Fetch error:', error);
          // You can return a custom offline page here if you want
        });
      })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});