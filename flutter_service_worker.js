'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "97565e8ecce75635d3a250c32db422bf",
"assets/AssetManifest.bin.json": "1b991e7f2f7ac13dda55975346121604",
"assets/AssetManifest.json": "16b106113818d7bf9f984ece90d62108",
"assets/assets/amal_charity/1.webp": "86d1567a526fad2136e9626889be452f",
"assets/assets/amal_charity/10.webp": "1afd7aedcd7e61be0b1a272fefa24880",
"assets/assets/amal_charity/11.webp": "a9941ff4b6c1ac004d57344cabff1757",
"assets/assets/amal_charity/12.webp": "a0d8b81bca0fab1d3f05b37ef953fc41",
"assets/assets/amal_charity/13.webp": "f03a65a8b229240743bf04cad10af77f",
"assets/assets/amal_charity/14.webp": "bf208567769999d1f92dd8e9023643a0",
"assets/assets/amal_charity/15.webp": "0f6cadcdee97d956bec4718e09270ce4",
"assets/assets/amal_charity/16.webp": "01e1b629ea7ea6acddc3eb2069b165f6",
"assets/assets/amal_charity/17.webp": "8694b99427ac6904a90bbea1f35492ea",
"assets/assets/amal_charity/18.webp": "5207c667bb6a17744d1f080a9242a001",
"assets/assets/amal_charity/19.webp": "81d90191e8688eaf57a25afad898ce85",
"assets/assets/amal_charity/2.webp": "6bd49ba0e2dddeb9f909f56f3cafb6dd",
"assets/assets/amal_charity/3.webp": "0dad5c63c6d3efd87d546f8432519605",
"assets/assets/amal_charity/4.webp": "596aa98a4b2794dfbaeb7ab59c8c5d4e",
"assets/assets/amal_charity/5.webp": "13594ce2329c7cc3fc70d409efe34c49",
"assets/assets/amal_charity/6.webp": "fe425c1860581d3384e82cbe4c3af250",
"assets/assets/amal_charity/7.webp": "7ca2761bed5d8906061efc536bcfc779",
"assets/assets/amal_charity/8.webp": "a3104233018df19556c7086ffc9b5dce",
"assets/assets/amal_charity/9.webp": "8da9dcecde044ab6b9f9e96bfb83991c",
"assets/assets/anees/1.webp": "78ae7ecd3407f04551c31c4ee413b27c",
"assets/assets/anees/10.webp": "2b9565ed9f933adba4dca6fa12819891",
"assets/assets/anees/11.webp": "e7bc1b6d012f84bb85ad2070dbb2015e",
"assets/assets/anees/12.webp": "aed40d49c406717e4d4487187d1ec26c",
"assets/assets/anees/13.webp": "c1fde77677044d81041863a296ac8d02",
"assets/assets/anees/14.webp": "ec85c9cfd9713f3ecdff9bf5fd049880",
"assets/assets/anees/15.webp": "ab64790c9031fb810a617f462c65629d",
"assets/assets/anees/16.webp": "526b847430d9fb6ef4034294df167a93",
"assets/assets/anees/2.webp": "7ef1968a18d6e379ce72ed76d55537fd",
"assets/assets/anees/3.webp": "0283cd7d3d32b536efe95ef7478c3c1c",
"assets/assets/anees/4.webp": "486610f8a1f031bd21089f8bb5cd1c52",
"assets/assets/anees/5.webp": "a0b887788558468c3123f14e14634308",
"assets/assets/anees/6.webp": "e5729c6853a1e29b10ea347a2eadc5d4",
"assets/assets/anees/7.webp": "f9fd69262f02e3105c3e08dd18ea68e3",
"assets/assets/anees/8.webp": "c047582b072ee02f7c3da56ad9c64be9",
"assets/assets/anees/9.webp": "cef0e58569868603561357dbbbc7c16f",
"assets/assets/my_roshita/1.webp": "ce96544240edf2b58b374b91d2ddf977",
"assets/assets/my_roshita/2.webp": "55ee6b7f2299b014a28c7e4b36168ee2",
"assets/assets/my_roshita/3.webp": "c2aa639483f76b97f3769c6f34e67255",
"assets/assets/my_roshita/4.webp": "a54f545d2c0eb1dd2d7cc0612e6890f4",
"assets/assets/my_roshita/5.webp": "b41cfe33421d756074a6a2f565768d77",
"assets/assets/raihan_academy/1.webp": "5e514362dadb8edff4ea0af71611839f",
"assets/assets/raihan_academy/2.webp": "0934c190fe0687fcedf8f3e37b55cc22",
"assets/assets/raihan_academy/3.webp": "f0377bc0a97bf0de03f28c18b20c1aab",
"assets/assets/raihan_academy/4.webp": "73765b71745c3bd18ef5db23039a008f",
"assets/assets/raihan_academy/5.webp": "5f722e1c6640d8352d305c772f4f61e8",
"assets/assets/raihan_academy/6.webp": "aedbc5eced71baada1d8b2f2899adb85",
"assets/assets/raihan_academy/7.webp": "a83aee19f157633138ec114a4d469fe6",
"assets/assets/raihan_academy/8.webp": "09efc91595dcbf5ab201222bf0311ea1",
"assets/assets/zExtra/my_image.webp": "d2c76444c0cbbb617c8bc6a8454fbdd7",
"assets/assets/zExtra/profile_background.webp": "4ff5ad7eff9d8158719f4ff1b032debc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0d8c8d1a97c312997b1bf16787cdf839",
"assets/NOTICES": "5d664205e56db6be195269a9b4fd0be6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "685d11d2314410de658421e47fa28f50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b0f87ccd0ae7fa326be6a9f1e7126fda",
"/": "b0f87ccd0ae7fa326be6a9f1e7126fda",
"main.dart.js": "ca362353f6e812f44e3b3b72586d5b51",
"manifest.json": "c046c708436d65bb36ffc65d29b84777",
"version.json": "31d305a343187cb8f05622fb86d5d559"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
