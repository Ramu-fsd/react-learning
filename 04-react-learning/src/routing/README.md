# Routing

## Concepts
- Browser routing with React Router
- Route configuration and nested routes
- URL parameters using `useParams`
- Navigation with `Link` and `NavLink`
- Not-found routes
- Route-level code splitting (extension exercise)

## Fintech example
The operations case workspace uses URLs such as `/routing/cases/CASE-701`. A URL can be shared or bookmarked to return to the same case.

## Security note
Hiding a route or navigation item is not authorization. The API must enforce role and resource-level permissions on every request.

## Exercises
1. Add a route for payment details using `/payments/:paymentId`.
2. Add query-string filters using `useSearchParams`.
3. Add a not-found route for unknown case IDs.
4. Implement a layout route with a shared sidebar.
5. Lazy-load a route and add a Suspense fallback.
