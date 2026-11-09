# Micro-Frontends

Micro-frontends split a frontend into independently owned and potentially independently deployed UI applications.

## Common integration styles
- Build-time composition.
- Runtime module federation.
- Web components/custom elements.
- Route-level composition through a shell.

## Benefits
- Independent team delivery and release cadence.
- Domain-aligned ownership.
- Potential technology autonomy.

## Costs
- Shared dependency/version coordination.
- Cross-app navigation and authentication.
- Consistent design, accessibility and observability.
- Runtime failure isolation and performance overhead.
- End-to-end testing across independently released parts.

## Decision test
Use micro-frontends only when organizational or deployment autonomy is worth the added operational complexity.
