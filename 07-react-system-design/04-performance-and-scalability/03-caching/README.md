# Caching

Caching exists at multiple layers:
- Browser memory and application state.
- HTTP cache headers.
- CDN/edge cache.
- Service worker cache.
- Backend and database caches.

## Important decisions
- Cache key and variation dimensions.
- Freshness (`Cache-Control`, validators such as ETag).
- Invalidation after mutations.
- User/tenant isolation.
- Sensitive data and shared-device risk.

Never assume a frontend cache is authoritative. Sensitive authenticated responses need deliberate cache policy.
