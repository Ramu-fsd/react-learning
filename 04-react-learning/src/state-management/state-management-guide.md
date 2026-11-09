# State Management Decision Guide

Before adding a global state library, identify:
1. Who owns the data?
2. Which components need it?
3. Is it local UI state, shared client state, or remote server state?
4. How frequently does it change?
5. Does it need persistence, caching, optimistic updates or auditability?

Avoid copying the same server response into multiple independent stores. Define clear ownership and invalidation rules. Never treat browser state as the source of truth for payment status or authorization.
