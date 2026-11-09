# Multi-Tenant Frontend

A multi-tenant UI serves users from different organizations while keeping tenant context and data access isolated.

## Frontend considerations
- Resolve tenant context from a trusted session or validated route/domain mapping.
- Show tenant identity clearly to reduce operator mistakes.
- Avoid caching one tenant's data under another tenant's cache key.
- Reset tenant-specific state when switching tenants.
- Apply tenant-specific branding through controlled configuration.
- Handle permissions and feature flags per tenant.

## Backend requirement
Tenant isolation must be enforced by backend authorization and data-access controls. A client-provided tenant ID is not proof of access.
