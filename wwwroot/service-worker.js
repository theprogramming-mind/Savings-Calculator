// This is the development service worker.
// It intentionally does very little — during development you want to always
// fetch fresh files from the dev server, not serve stale cached versions.
// The real caching magic happens in service-worker.published.js at publish time.

self.addEventListener('fetch', () => {
    // Do nothing in development — let all requests pass through normally.
});
