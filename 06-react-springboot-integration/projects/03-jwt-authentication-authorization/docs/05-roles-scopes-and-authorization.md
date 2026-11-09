# Roles, Scopes and Authorization

## Scopes

Scopes usually represent delegated API permissions, for example:
- `operations.read`
- `operations.approve`

Spring Security maps these to authorities prefixed with `SCOPE_`.

## Roles

Roles often represent business responsibilities such as `OPERATIONS_ANALYST` or `OPERATIONS_SUPERVISOR`. Role claim shape and mapping are identity-provider-specific. Do not assume every provider emits a `roles` claim in the same format.

## Authorization design

- Deny by default.
- Enforce permissions at the API boundary and, where needed, in business services.
- Apply least privilege.
- Separate read, initiate, approve and administer permissions.
- Consider maker-checker controls for sensitive financial workflows.
- Record auditable security events without recording credentials or sensitive payloads.

The sample uses scopes to keep the exercise focused and interoperable.
