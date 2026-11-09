# Integration Testing

Integration tests verify that multiple pieces work together, such as a feature component, API client and query cache.

- Mock at the network boundary rather than mocking every internal function.
- Cover loading, success, empty and failure states.
- Verify user-visible behavior.
- Reset mock handlers and shared state between tests.
