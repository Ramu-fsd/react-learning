# 06. Compound Components

Compound components are related components that work together through a shared parent context. They provide a flexible API for coordinated UI.

Example API:

```tsx
<WorkspaceTabs defaultValue="fraud">
  <WorkspaceTabs.List>
    <WorkspaceTabs.Trigger value="fraud">Fraud</WorkspaceTabs.Trigger>
    <WorkspaceTabs.Trigger value="reconciliation">Reconciliation</WorkspaceTabs.Trigger>
  </WorkspaceTabs.List>
  <WorkspaceTabs.Panel value="fraud">...</WorkspaceTabs.Panel>
  <WorkspaceTabs.Panel value="reconciliation">...</WorkspaceTabs.Panel>
</WorkspaceTabs>
```

## Benefits

- Clear parent-child relationship.
- Flexible layout.
- Shared internal state.
- More expressive APIs for complex UI widgets.

## Accessibility

A production tabs component should implement keyboard navigation, focus management, unique IDs, and correct ARIA relationships. The demo shows the composition pattern but is not a complete accessible tabs implementation.
