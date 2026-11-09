# 01 - Frontend Architecture

A practical React + TypeScript learning module covering component architecture, feature-based architecture, folder organization, and scalable application design.

## Goals
- Separate UI composition from business features.
- Design reusable components with clear responsibilities.
- Organize code by business capability using feature-based modules.
- Establish boundaries for API access, domain logic, shared UI, and application composition.
- Understand how to evolve a small React app without overengineering it.

## Contents
| Module | Focus |
|---|---|
| `01-component-architecture` | Component responsibilities, composition, containers and presentational UI |
| `02-feature-based-architecture` | Organizing code by business feature |
| `03-folder-structure-strategies` | Comparing type-based and feature-based layouts |
| `04-scalable-react-applications` | Dependency boundaries, shared modules, routing and growth strategy |
| `demo-app` | Runnable React + TypeScript + Vite example |

## Prerequisites
- Node.js 20+
- npm
- Basic React, TypeScript, JavaScript modules and HTTP concepts

## Run the demo
```bash
cd demo-app
npm install
npm run dev
```

Open the local URL printed by Vite.

## Suggested study order
1. Read the component architecture guide.
2. Review the feature-based structure and dependency rules.
3. Compare the folder organization strategies.
4. Study the scalability guide.
5. Run the demo and trace the import flow from `src/app` to `src/features` and `src/shared`.

## Architecture principles used
- Keep business capabilities inside feature modules.
- Keep generic UI primitives in `shared`.
- Keep application-wide setup and composition in `app`.
- Keep API transport concerns out of visual components.
- Prefer explicit dependencies and composition over hidden global coupling.
- Avoid creating abstractions before there is a real reuse or complexity problem.

## Important
This is a learning reference, not a universal folder-structure prescription. Adapt boundaries to team size, product complexity, deployment model, and domain needs.

## Author
**Ramu Boya**

- GitHub: https://github.com/Ramu-fsd
- LinkedIn: https://www.linkedin.com/in/ramuboya
