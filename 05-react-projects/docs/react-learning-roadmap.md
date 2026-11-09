# React Learning Roadmap

A progressive roadmap for developing practical React and TypeScript skills, moving from core UI development to enterprise fintech applications and Spring Boot integration.

## Learning principles

- Learn a concept, implement a small example, then apply it in a business-oriented project.
- Prefer TypeScript for portfolio applications.
- Keep components focused and make data flow explicit.
- Learn browser and HTTP fundamentals alongside React.
- Treat accessibility, testing, security, and maintainability as part of frontend engineering.

## Phase 1 — React fundamentals

**Focus:** Understand how React applications are structured and rendered.

Topics:
- JavaScript ES6+ essentials: modules, destructuring, spread/rest, promises, async/await
- JSX and component functions
- Props and one-way data flow
- State and event handling
- Conditional rendering
- Lists and stable keys
- Forms and controlled inputs
- Component composition
- TypeScript basics: types, interfaces, unions, generics

Practice:
- Customer summary card
- Transaction list
- Account details form

Exit criteria:
- Build reusable components.
- Explain props versus state.
- Render collections with stable keys.
- Type component props and event handlers.

## Phase 2 — React Hooks and application state

**Focus:** Manage component behavior and shared state.

Topics:
- `useState`
- `useEffect` and effect cleanup
- `useContext`
- `useRef`
- `useMemo` and `useCallback`
- Custom hooks
- Form state and validation
- Loading, empty, success, and error states
- Context versus local state

Practice:
- Searchable transaction table
- Account preference settings
- Reusable API status hook

Exit criteria:
- Choose state ownership appropriately.
- Avoid unnecessary effects.
- Explain dependency arrays and cleanup.
- Extract reusable behavior into custom hooks.

## Phase 3 — Advanced React

**Focus:** Build maintainable and performant applications.

Topics:
- Component composition patterns
- Controlled and uncontrolled components
- Context design
- Reducers and state machines
- Code splitting and lazy loading
- Error boundaries
- Memoization and render profiling
- Accessibility and semantic HTML
- Routing and route protection concepts
- Testing with Vitest and React Testing Library

Practice:
- Operations dashboard
- Lazy-loaded investigation workspace
- Role-aware navigation prototype

Exit criteria:
- Explain when memoization helps and when it does not.
- Split code by route or feature.
- Test user-visible behavior.
- Handle application-level errors gracefully.

## Phase 4 — Project progression

Build projects in increasing complexity.

### Beginner
- Profile and portfolio page
- Task tracker
- Expense calculator
- Contact directory

### Intermediate
- Transaction management
- Customer management
- Expense approval workflow
- Banking account dashboard
- Payment tracker
- Service request management

### Advanced
- Enterprise admin portal
- Monitoring dashboard
- Workflow automation UI
- Document management UI
- Analytics dashboard
- Multi-tenant SaaS dashboard

### Fintech enterprise
- Digital banking portal
- Payment operations dashboard
- Fraud investigation workbench
- KYC onboarding portal
- Loan origination UI
- Reconciliation management
- Treasury cash management
- Enterprise banking operations platform

For each project, document the business problem, user journeys, architecture, API contracts, error states, tests, limitations, and future improvements.

## Phase 5 — React + Spring Boot integration

**Focus:** Connect the frontend to real backend APIs.

Topics:
- HTTP, REST, JSON, status codes
- Fetch or Axios service layer
- API base URL configuration
- Request cancellation and loading states
- DTOs and TypeScript API types
- Validation and error contracts
- Pagination, sorting, and filtering
- CORS configuration
- Authentication and authorization concepts
- Safe token/session handling
- Contract and integration testing

Practice:
- Customer API integration
- Account and transaction APIs
- Payment initiation and status tracking
- Server-side pagination and filtering

Exit criteria:
- Explain the browser-to-API request flow.
- Handle success, validation, authorization, and server errors.
- Keep API concerns out of presentational components.
- Explain CORS and why frontend route hiding is not authorization.

## Phase 6 — Frontend architecture and system design

Topics:
- Feature-based folder structure
- Shared component boundaries
- State management trade-offs
- API gateway and backend-for-frontend concepts
- Authentication flow and session lifecycle
- Caching and stale data
- Performance budgets and bundle analysis
- Accessibility and responsive design
- Observability and frontend error reporting
- CI/CD and static hosting
- CDN caching and cache invalidation
- Environment separation

Practice:
- Design a banking operations frontend
- Document deployment to S3 and CloudFront
- Define frontend NFRs and measurable acceptance criteria

## Suggested 12-week schedule

| Weeks | Focus | Deliverable |
|---|---|---|
| 1–2 | Fundamentals + TypeScript | Small component exercises |
| 3–4 | Hooks and state | Search/filter application |
| 5–6 | Advanced React | Operations dashboard |
| 7–8 | Intermediate and advanced projects | Two completed portfolio projects |
| 9–10 | Fintech projects | One substantial fintech UI |
| 11 | Spring Boot integration | End-to-end API-connected application |
| 12 | Architecture, testing and documentation | Portfolio review and system design notes |

Adjust the pace based on available study time. The schedule is a suggested sequence, not a guarantee of mastery.

## Weekly routine

1. Study one concept.
2. Implement a focused example.
3. Add tests for important behavior.
4. Apply the concept to a project.
5. Update the README and learning notes.
6. Review code for accessibility, security, and maintainability.

## Portfolio quality bar

A strong project should include:
- Clear business context and user journeys
- Reproducible setup instructions
- Consistent TypeScript types
- Loading, empty, and error states
- Responsive and accessible UI
- Meaningful tests
- Architecture diagram and API documentation
- Honest limitations and implementation status
- Screenshots using synthetic data only
