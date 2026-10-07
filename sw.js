/* Abax Tracker — service worker.
   Zmień numer w CACHE przy każdej publikacji nowej wersji plików. */
const CACHE = "abax-tracker-v3";
const CORE = ["./", "./index.html", "./manifest.webmanifest"];
const OPTIONAL = ["./icon-192.png", "./icon-512.png", "./icon-512-maskable.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then(async (c) => {
      await c.addAll(CORE); // pliki krytyczne: błąd = brak instalacji
      await Promise.all(OPTIONAL.map((u) => c.add(u).catch(() => {}))); // brak ikony nie blokuje instalacji
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

function store(req, res) {
  if (res && res.ok && res.type === "basic") {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  if (req.mode === "navigate") {
    /* strony: najpierw sieć (świeża wersja), w razie braku internetu — cache */
    e.respondWith(
      fetch(req).then((res) => store(req, res)).catch(() =>
        caches.match(req).then((hit) => hit || caches.match("./index.html"))
      )
    );
    return;
  }
  /* pozostałe zasoby: najpierw cache */
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => store(req, res))));
});
