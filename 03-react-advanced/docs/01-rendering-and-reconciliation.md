# 01. Rendering and Reconciliation

React rendering calculates what the UI should look like for the current props and state. React then commits the necessary changes to the host environment.

## Practical model

1. A component renders.
2. React calculates the next element tree.
3. React reconciles the new result with the previous result.
4. React commits required DOM changes.
5. Effects run according to their scheduling semantics.

This is a useful mental model, not a promise that every render causes a DOM mutation.

## Reconciliation and identity

React uses element type, position, and keys to understand whether a component can be preserved or should be replaced. Stable keys are especially important in changing collections such as payment queues.

## Practical guidance

- Keep render functions pure.
- Use stable keys derived from payment or transaction IDs.
- Avoid generating random keys during render.
- Understand that changing a component's key intentionally resets its state.
- Do not rely on render count as a business event or audit signal.

## Interview prompts

- What causes a component to render?
- Does every render update the DOM?
- Why can using an array index as a key be unsafe?
- What is the difference between rendering and committing?
