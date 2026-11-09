# Repository Architecture Guide

## Recommended boundaries

- `app`: application bootstrap, providers, routes and global composition.
- `features`: business capabilities and their UI, hooks, API functions and types.
- `shared`: domain-agnostic UI components, utilities and infrastructure.
- `docs`: architecture decisions, learning notes and interview material.

Not every learning project must follow the same structure. Small exercises can remain simple. Apply stronger boundaries as complexity and collaboration needs increase.

## Architecture review questions
- Is each component's responsibility clear?
- Is business logic owned by the relevant feature?
- Are shared modules genuinely domain-agnostic?
- Are API errors and loading states handled consistently?
- Is server state distinguished from local UI state?
- Are backend authorization and tenant isolation enforced?
- Are performance decisions supported by measurements?
- Are accessibility and testing considered?
