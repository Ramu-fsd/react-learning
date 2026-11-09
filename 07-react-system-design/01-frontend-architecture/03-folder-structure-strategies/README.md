# Folder Structure Strategies

There is no single best React folder structure. Choose one that makes ownership, change impact and dependencies easy to understand.

## 1. Type-based structure
```text
src/
  components/
  hooks/
  pages/
  services/
  types/
```

**Advantages:** simple to start; easy to understand in a small application.

**Trade-offs:** as the application grows, a single business feature is spread across many folders.

## 2. Feature-based structure
```text
src/
  features/
    customers/
      components/
      hooks/
      api/
    payments/
      components/
      hooks/
      api/
  shared/
  app/
```

**Advantages:** business capabilities are cohesive; easier to assign ownership.

**Trade-offs:** requires discipline around shared code and cross-feature dependencies.

## 3. Hybrid structure
Use feature folders for business-specific code and shared folders for truly reusable infrastructure and UI. This is often a practical starting point for enterprise applications.

## Decision guide
| Situation | Reasonable starting point |
|---|---|
| Small prototype | Type-based |
| Growing product with distinct business domains | Feature-based |
| Enterprise application with shared platform capabilities | Hybrid |
| Independently deployed UI domains | Evaluate micro-frontends separately |

## Avoid
- Deep folder nesting without a clear boundary.
- `common`, `utils` or `helpers` becoming dumping grounds.
- Moving code to `shared` merely because it is imported twice.
- Treating folder structure as a substitute for module boundaries and code review.

## Exercise
Take an existing application and map its files by business capability. Identify which files are genuinely shared and which should remain feature-owned.
