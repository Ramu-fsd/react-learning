# 05 - React Projects

A progressive collection of practical React projects, moving from fundamentals to enterprise fintech workflows.

## Project categories

| Category | Focus | Suggested outcome |
|---|---|---|
| `01-beginner-projects` | Components, props, state, events, forms, lists | Small standalone apps |
| `02-intermediate-projects` | API integration, routing, reusable components, state | Feature-rich business applications |
| `03-advanced-projects` | Complex workflows, performance, architecture, testing | Production-style frontend engineering |
| `04-fintech-enterprise-projects` | Banking, payments, fraud, reconciliation, KYC | Portfolio-grade domain applications |

## Recommended learning path

1. Complete the six beginner apps.
2. Build the intermediate projects in sequence.
3. Implement advanced projects with tests, accessibility and performance budgets.
4. Finish with the fintech enterprise capstone.

## Repository conventions

Each project should have:
- A dedicated README with business context, features, architecture and run instructions
- Its own `package.json` when it is a standalone application
- TypeScript, linting and a production build
- Meaningful mock data and realistic domain terminology
- Unit/component tests for important behavior
- Screenshots or a short demo GIF once the UI is stable
- No secrets, real customer data, credentials or production endpoints

## Suggested stack

- React 19 + TypeScript + Vite
- React Router
- Redux Toolkit or Context where justified
- React Hook Form + Zod
- Vitest + React Testing Library
- Playwright for end-to-end tests
- CSS Modules or a consistent styling system

## Security and domain note

These projects are portfolio demonstrations. Authentication screens, role-aware rendering and client-side validation do not provide security by themselves. Authorization, payment rules, audit records and sensitive-data controls must be enforced by backend services.

## Author

**Ramu Boya**

- GitHub: https://github.com/Ramu-fsd
- LinkedIn: https://www.linkedin.com/in/ramuboya
