# React Learning & Enterprise Frontend Architecture

A structured React learning portfolio covering fundamentals, hooks, advanced React, practical projects, Spring Boot integration and frontend system design.

This repository is designed to build practical frontend engineering skills through progressively challenging examples, with enterprise and fintech scenarios used where relevant.

## Repository Structure

```text
react-learning/
│
├── 01-react-fundamentals/
├── 02-react-hooks/
├── 03-react-advanced/
├── 04-react-learning/
├── 05-react-projects/
│   ├── 01-beginner-projects/
│   ├── 02-intermediate-projects/
│   ├── 03-advanced-projects/
│   └── 04-fintech-enterprise-projects/
├── 06-react-springboot-integration/
├── 07-react-system-design/
└── docs/
    ├── architecture/
    ├── interview-preparation/
    └── learning-roadmap/
```

## Learning Path

| Stage | Area | Main outcome |
|---|---|---|
| 01 | React Fundamentals | JSX, components, props, state, events and forms |
| 02 | React Hooks | State/effect hooks, context, refs and custom hooks |
| 03 | Advanced React | Composition, performance, lazy loading and error boundaries |
| 04 | React Learning | Consolidated concepts and hands-on learning exercises |
| 05 | React Projects | Beginner to advanced projects, including fintech scenarios |
| 06 | React + Spring Boot | Full-stack integration, authentication, APIs, Kafka and gateway patterns |
| 07 | React System Design | Frontend architecture, state, API design, performance, security and enterprise patterns |

## Technology Stack

- React 19
- TypeScript
- JavaScript / modern ES features
- Vite
- React Hooks and Context API
- Redux Toolkit concepts
- REST API integration
- Spring Boot and Java 21 integration examples
- Spring Security / OAuth 2.0 / OIDC concepts
- Kafka integration examples
- Testing and frontend quality practices

Individual project folders may use different dependency versions. Refer to each project's `package.json` and README before running it.

## Getting Started

1. Install a supported Node.js LTS version (Node.js 20 or later is a suitable baseline for these learning projects).
2. Open the specific project folder you want to run.
3. Install its dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. For projects with a backend, follow that project's README for Java, Maven, database, Kafka or Docker prerequisites.

Not every folder is a standalone application. Some folders contain documentation, exercises or architecture references.

## Project Categories

### React Projects
The `05-react-projects` category progresses from beginner exercises to advanced enterprise and fintech UI scenarios.

### Full-Stack Integration
The `06-react-springboot-integration` category demonstrates frontend/backend interaction using Spring Boot services. Some examples use synthetic or in-memory data; read each project's production-readiness notes before treating it as more than a learning demo.

### System Design
The `07-react-system-design` category covers frontend architecture and interview-oriented design exercises, including digital banking, payment, trading and enterprise banking scenarios.

## Engineering Principles

- Prefer clear component responsibilities and composition.
- Organize business-specific code around features where appropriate.
- Keep shared UI and utilities independent of business features.
- Separate local UI state from remote server state.
- Centralize API transport and error handling.
- Enforce authentication, authorization and data access on backend services.
- Measure performance before applying optimizations.
- Include loading, empty, error and recovery states.
- Treat security, accessibility, testing and observability as architecture concerns.

## Important Disclaimer

All banking, payment, customer and transaction data used in these learning projects is synthetic. The projects are educational demonstrations and are not production banking or payment systems. Do not use real customer data, credentials, payment details or production endpoints.

## Documentation

See the `docs/` folder for the learning roadmap, architecture guidance, interview preparation and contribution standards.

## Author

**Ramu Boya**

- GitHub: https://github.com/Ramu-fsd
- LinkedIn: https://www.linkedin.com/in/ramuboya
