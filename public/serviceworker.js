let CACHE_NAME = 'michael-gvdw-wind-forecast'

const urlsToCache = [
    // online pages
    '/',
    '/home',
    '/about',
    '/terms',
    // offline page
    'offline.html'
]

const self = this

// installation of serviceWorker
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            console.log(`Opened cache`)
            return cache.addAll(urlsToCache)
        })
    )
    self.skipWaiting();
})

// listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(() => {
            return fetch(event.request).catch(() => caches.match('offline.html'))
        })
    )
})

// activate the sw
self.addEventListener('activate', (event) => {
    const cache_witelist = []
    cache_witelist.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheNames) => {
                if (!cache_witelist.includes(cacheNames)) {
                    return caches.delete(cacheNames)
                }
            })
        ))
    )   
})