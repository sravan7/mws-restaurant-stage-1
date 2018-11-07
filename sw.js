let presentCache = 'restaurant-v2';
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(presentCache).then(function (cache) {
            return cache.addAll([
                '/',
                '/restaurant.html',
                'js/main.js',
                'js/dbhelper.js',
                'js/registration.js',
                'js/restaurant_info.js',
                'css/styles.css',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg'
            ]);
        })

    );
});
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheNames) {
                    return cacheNames.startsWith('restaurant-') && cacheNames != presentCache;
                }).map(function (cacheNames) {
                    return cache.delete(cacheNames)
                })
            );
        })
    );
});
self.addEventListener('fetch', function(event) {
   event.respondWith(
   caches.match(event.request).then(function(response){
        if(response) return response;
       return fetch(event.request);
   })
   );
});
