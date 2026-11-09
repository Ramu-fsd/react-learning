# Service Request Management

A support-team workspace for customer service requests, assignment, prioritization and lifecycle tracking.

## Features
- Create a service request with category, priority and description
- Search requests by ID, customer or subject
- Filter by status and priority
- Assign an owner
- Move requests through OPEN, IN_PROGRESS, RESOLVED and CLOSED
- KPI cards for open workload and high-priority cases

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Workflow
`OPEN -> IN_PROGRESS -> RESOLVED -> CLOSED`. The demo permits controlled status selection for learning purposes. Production transitions should be validated by a backend workflow service.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
