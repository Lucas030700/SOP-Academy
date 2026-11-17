const CACHE_NAME = "sop-academy-shell-v22";
const CDN_ASSETS = [
  "https://cdn.jsdelivr.net/npm/marked@15.0.7/marked.min.js",
  "https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js",
  "https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js",
  "https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css"
];
const SHELL = ["./","./index.html","./styles.css","./app.js","./manifest.webmanifest","./data/lectures-index.json"];
const ALLOWED = new Set([self.location.origin,"https://raw.githubusercontent.com","https://cdn.jsdelivr.net"]);
self.addEventListener("install", event => {
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE_NAME);
    await cache.addAll(SHELL);
    await Promise.allSettled(CDN_ASSETS.map(async url=>{
      const response=await fetch(url,{mode:"cors"});
      if(response.ok) await cache.put(url,response);
    }));
    await self.skipWaiting();
  })());
});
self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch", event => {
  const req=event.request;
  const url=new URL(req.url);
  if(req.method!=="GET" || !ALLOWED.has(url.origin)) return;
  const isIndex=url.origin===self.location.origin && url.pathname.endsWith("/data/lectures-index.json");
  const isLecture=url.origin==="https://raw.githubusercontent.com" && (url.pathname.endsWith(".md") || url.pathname.endsWith(".json"));
  const isLibraryAsset=url.origin==="https://cdn.jsdelivr.net";
  if(isIndex || isLecture){
    event.respondWith((async()=>{
      const cached=await caches.match(req);
      try{
        const response=await fetch(req,{cache:"no-store"});
        if(response && response.ok){
          const copy=response.clone();
          const cache=await caches.open(CACHE_NAME);
          await cache.put(req,copy);
        }
        return response;
      }catch(error){
        if(cached) return cached;
        throw error;
      }
    })());
    return;
  }
  if(isLibraryAsset){
    event.respondWith(caches.match(req).then(cached=>cached || fetch(req).then(response=>{
      if(response && response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy));}
      return response;
    })));
    return;
  }
  if(url.origin!==self.location.origin) return;
  event.respondWith(caches.match(req).then(cached=>cached || fetch(req).then(response=>{
    if(response && response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy));}
    return response;
  })));
});