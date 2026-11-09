# 04. Error Boundaries

Error boundaries catch rendering errors in descendant component trees and display a fallback UI instead of allowing the entire affected tree to disappear.

A class component can implement an error boundary using `getDerivedStateFromError` and optionally `componentDidCatch`.

## Good placement

- Around a feature workspace.
- Around a complex chart or reporting area.
- Around independently recoverable application regions.

## What they do not catch automatically

Error boundaries do not catch every error, such as errors in event handlers, arbitrary asynchronous callbacks, or server-side rendering failures. Handle those through their relevant mechanisms.

## Production considerations

- Log sanitized diagnostics to approved monitoring.
- Never log credentials, tokens, or sensitive customer/payment data.
- Provide a recovery action where sensible.
- Do not expose stack traces or internal implementation details to end users.
