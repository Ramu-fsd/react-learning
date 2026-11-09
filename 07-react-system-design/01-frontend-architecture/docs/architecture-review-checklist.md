# React Architecture Review Checklist

## Boundaries
- [ ] Business-specific code is owned by a feature.
- [ ] Shared code is genuinely reusable and domain-agnostic.
- [ ] Shared modules do not import feature modules.
- [ ] Cross-feature imports use explicit public APIs.

## Components and state
- [ ] Components have clear responsibilities.
- [ ] State is located at the lowest common owner.
- [ ] Remote server state is not confused with transient UI state.
- [ ] Large components have been split where it improves clarity.

## Integration and resilience
- [ ] API concerns are centralized behind an API client or feature API module.
- [ ] Loading, empty, error and retry states are considered.
- [ ] Duplicate submissions and stale responses are handled where relevant.
- [ ] Authorization is enforced by backend services.

## Quality and operations
- [ ] Critical flows have automated tests.
- [ ] Accessibility and keyboard behavior are reviewed.
- [ ] Client telemetry excludes secrets and sensitive customer data.
- [ ] Bundle size and route loading are measured rather than guessed.
