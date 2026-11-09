# Enterprise Admin Portal

A modular enterprise administration workspace for managing teams, operational roles and access requests.

## Features
- Overview metrics and searchable user directory
- Create team members and assign a business role
- Activate/deactivate user accounts in demo state
- Role-aware UI navigation and module visibility
- Access request review queue with approve/reject actions

## Run
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Architecture
Feature areas are composed in one React application. The role gate demonstrates conditional rendering only. Backend authorization must protect every API and resource.
## Production extensions
Add identity-provider integration, fine-grained permissions, audit events, tenant scoping, API pagination, tests and administrative approval workflows.

## Author
**Ramu Boya** · [GitHub](https://github.com/Ramu-fsd) · [LinkedIn](https://www.linkedin.com/in/ramuboya)
