# Workflow Automation Platform

A workflow designer and execution board for financial operations approvals.

## Features
- Create workflow definitions with name, business domain and approval steps
- Launch instances from configured definitions
- Move instances through step-by-step approval states
- Display workflow progress and current owner
- Search and filter workflow instances

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Architecture
The demo models workflow definitions and instances in React state. A production design should persist workflow definitions and transitions in a backend workflow engine, with versioning and audit events.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
