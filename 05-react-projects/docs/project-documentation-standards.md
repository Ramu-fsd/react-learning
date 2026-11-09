# Project Documentation Standards

Use these standards across the React portfolio so repositories are consistent and easy for reviewers to understand.

## Naming

- Use lowercase kebab-case for folder and project names.
- Number learning stages where sequence matters.
- Use descriptive names such as `payment-tracker` rather than generic names such as `demo2`.
- Keep one clear README at each meaningful project boundary.

## Required README sections

Every standalone project should include:
1. Summary and business problem
2. Key features
3. Technology stack
4. Architecture or component overview
5. Project structure
6. Prerequisites and setup
7. Configuration
8. API details, if applicable
9. Tests and quality checks
10. Limitations and future improvements
11. Author and links

## Code organization

Prefer feature-oriented organization as applications grow:

```text
src/
├── app/             # App bootstrap, routes and providers
├── components/      # Reusable UI components
├── features/        # Business capabilities
├── hooks/           # Shared custom hooks
├── services/        # API clients and service functions
├── types/           # Shared TypeScript types
└── utils/           # Small shared utilities
```

Do not create folders that have no meaningful contents. Small exercises can use a simpler structure.

## Quality expectations

- Use TypeScript types for API payloads and component contracts.
- Keep business logic out of large presentation components.
- Handle loading, empty, success, and error states.
- Use semantic HTML and keyboard-accessible controls.
- Add tests for important user journeys and edge cases.
- Avoid hard-coded secrets and production data.
- Run build and lint checks before publishing.

## Screenshots and sample data

- Use synthetic names, account numbers, and transactions.
- Mask sensitive-looking values.
- Capture the application at useful viewport sizes.
- Keep screenshots current with the implementation.
- Do not imply that mock workflows are connected to real systems.

## Architecture documentation

For meaningful applications, include:
- Context and users
- Main components
- Data flow
- API boundaries
- Authentication and authorization boundaries
- Failure handling
- Performance and availability considerations
- Deployment view, when relevant

## Definition of done

A project is ready to publish when another developer can clone it, understand its purpose, run it, and identify what is real versus simulated without asking the author.
