# Lazy Loading

Lazy loading defers work until it is likely to be needed.

- Route components: load when a route is visited.
- Images: use native `loading="lazy"` when appropriate.
- Heavy charts/editors: load on demand.
- Below-the-fold content: defer when it does not harm usability.

Do not lazy-load critical above-the-fold content without evidence. Consider layout shifts, accessibility and offline behavior.
