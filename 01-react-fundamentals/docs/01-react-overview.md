# 01. React Overview

## What is React?

React is a JavaScript library for building user interfaces. It encourages developers to describe what the UI should look like for a given state. React then updates the rendered interface when that state changes.

## Core ideas

- **Declarative UI:** describe the desired result rather than manually changing DOM nodes.
- **Components:** split an interface into reusable, focused pieces.
- **Props:** pass data from a parent component to a child.
- **State:** represent data that changes over time.
- **Composition:** combine components to create larger interfaces.

## Component mental model

A component is a function that receives inputs (props) and returns a description of UI (usually JSX). Components should be pure with respect to their props: for the same props and state, rendering should produce the same UI description.

## Example

```tsx
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}</h1>;
}
```

## When React is useful

React is useful when an application has interactive, stateful interfaces that benefit from reusable components: dashboards, portals, workflow tools, customer applications, and administrative systems.

## Interview talking points

1. React is a library focused on the UI layer.
2. Components make interfaces reusable and easier to reason about.
3. Props are inputs; state is component-managed data that can change.
4. React rendering is declarative; avoid manually mutating the DOM for normal UI updates.
