# 08. Profiling and Measurement

Performance work should start with a measurable problem.

## Suggested workflow

1. Identify a user-visible symptom.
2. Reproduce it with representative data and hardware.
3. Use React Developer Tools Profiler to identify expensive commits.
4. Inspect browser Performance and Network panels.
5. Form one optimization hypothesis.
6. Make a focused change.
7. Measure again and compare.
8. Add regression checks where practical.

## Metrics to consider

- Initial JavaScript transfer and parse cost.
- Route/module load time.
- Interaction responsiveness.
- Render duration for large tables.
- Number of records rendered at once.
- API latency and payload size.
- Error and failed chunk-load rates.

## Avoid misleading results

Do not compare a development Strict Mode run with a production build and conclude that render behavior is identical. Test production builds with consistent datasets and repeatable conditions.
