const staticCache = "Static-cache-v1";
const dynamicCache = "Dynamic-cache-v1";

const assets = [
    "/",
    "/creds.json",
    "/index.html",
    "/js/app.js",
    "/js/builder.js",
    "/js/angular-selectize.js",
    "/js/materialize.min.js",
    "/css/app.css",
    "/css/materialize.min.css",
    "/css/selectize.css",
    "/css/types-standard.css",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.13.3/js/standalone/selectize.js",
    "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.2/angular.js",
    "https://cdnjs.cloudflare.com/ajax/libs/machineboy2045-angular-selectize2/3.0.1/angular-selectize.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
    "https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js"
];



//Cache size limit
const limitCacheSize = (name, size) => {
    caches.open(name).then((cache) => {
        cache.keys().then((keys) => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
        });
    });
};



self.addEventListener("install", function (event) {
    //fires when the browser install the app
    //here we're just logging the event and the contents of the object passed to the event.
    //the purpose of this event is to give the service worker a place to setup the local
    //environment after the installation completes.
    console.log(`SW: Event fired: ${event.type}`);
    event.waitUntil(
        caches.open(staticCache).then(function (cache) {
            console.log("SW: Precaching App shell");
            cache.addAll(assets);
        })
    );
});

self.addEventListener("activate", function (event) {
    //fires after the service worker completes its installation.
    // It's a place for the service worker to clean up from
    // previous service worker versions.
    // console.log(`SW: Event fired: ${event.type}`);
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                    .filter((key) => key !== staticCache)
                    .map((key) => caches.delete(key))
            );
        })
    );
});
//comment
self.addEventListener("fetch", function (event) {
    //fires whenever the app requests a resource (file or data)
    // console.log(`SW: Fetching ${event.request.url}`);
    //next, go get the requested resource from the network
    event.respondWith(
        caches
            .match(event.request)
            .then((response) => {
                return (
                    response ||
                    fetch(event.request).then((fetchRes) => {
                        return caches.open(dynamicCache).then((cache) => {
                            cache.put(event.request.url, fetchRes.clone());
                            return fetchRes;
                        });
                    })
                );
            })
    );
});