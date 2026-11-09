# Component Architecture

## 1. Component responsibilities
A well-designed component should have a clear reason to change. Common roles include:

- **Page components:** coordinate a route or screen.
- **Feature components:** implement a business capability, such as customer search.
- **Shared UI components:** generic controls such as buttons, badges and inputs.
- **Layout components:** provide navigation, page shells and responsive regions.

These are roles, not mandatory React component types. A component can be composed from smaller components as the feature evolves.

## 2. Composition over giant components
Prefer small components with explicit props. A page should coordinate the screen rather than own every detail of rendering, data transformation, validation and network access.

```tsx
function CustomerPage() {
  return (
    <PageLayout title="Customers">
      <CustomerToolbar />
      <CustomerList />
    </PageLayout>
  );
}
```

## 3. Presentational and data-aware components
A presentational component receives data and callbacks through props. A data-aware component coordinates state or data fetching. This separation is useful, but do not force every component into a rigid container/presentational pattern.

## 4. Component design checklist
- Does the component have one clear responsibility?
- Are props named and typed clearly?
- Is state kept at the lowest common owner that needs it?
- Is business logic separated from formatting and rendering?
- Can the component be tested without mounting the entire application?
- Is reuse real, or is this abstraction being created too early?

## 5. Common anti-patterns
- One component owning routing, API calls, business rules and a large UI.
- Passing many unrelated boolean props to control every visual state.
- Duplicating the same business rule in multiple components.
- Putting all state in a single top-level component.
- Creating generic abstractions that only have one caller and no clear extension need.

## Exercise
Refactor a customer screen into a page, toolbar, search field, customer list and customer row. Keep filtering logic in the feature boundary and keep generic badges/buttons in shared UI.
