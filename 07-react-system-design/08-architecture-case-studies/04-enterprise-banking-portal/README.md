# Enterprise Banking Portal


## Context
A bank employee portal supports customer servicing, operational workflows, case management and role-specific dashboards.

## Functional requirements
- Role-specific navigation and dashboards.
- Customer and organization search.
- Case queues and workflow tasks.
- Document review and secure download.
- Multi-tenant or legal-entity context where required.

## Non-functional requirements
- Strict role and object-level access enforcement.
- Clear operator context and prevention of wrong-entity actions.
- Accessibility and browser support.
- Operational observability and audit integration.
- Modular delivery by domain teams.

## High-level architecture
```text
Enterprise React Shell
  -> Customer Feature
  -> Payments Feature
  -> Case Management Feature
  -> Documents Feature
  -> Shared Design System
       |
       v
BFF / API Gateway -> Domain Services -> Enterprise Data
```

## Key decisions
- Start with a modular monolith and feature boundaries.
- Introduce micro-frontends only when independent team delivery is required.
- Keep shared UI components domain-agnostic.
- Resolve tenant and user permissions from trusted backend context.
- Use consistent design-system patterns for operational tables and forms.

## Interview prompts
- When would you split this into micro-frontends?
- How do you prevent tenant data leakage in client caches?
- How do you roll out a shared design-system breaking change?

