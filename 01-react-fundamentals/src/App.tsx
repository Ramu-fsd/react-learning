import { Section } from './components/Section';
import { JsxExample } from './examples/JsxExample';
import { PropsExample } from './examples/PropsExample';
import { StateExample } from './examples/StateExample';
import { EventsExample } from './examples/EventsExample';
import { ConditionalRenderingExample } from './examples/ConditionalRenderingExample';
import { ListsAndKeysExample } from './examples/ListsAndKeysExample';
import { FormsExample } from './examples/FormsExample';
import { CompositionExample } from './examples/CompositionExample';

const topics = [
  'JSX and expressions',
  'Function components and props',
  'State with useState',
  'Event handling',
  'Conditional rendering',
  'Lists and stable keys',
  'Controlled forms',
  'Component composition',
];

export default function App() {
  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">React learning path · Module 01</p>
        <h1>React Fundamentals</h1>
        <p>
          Learn the building blocks of React through small, interactive examples
          using TypeScript and a banking-inspired interface.
        </p>
        <div className="topic-pills">
          {topics.map((topic) => <span key={topic}>{topic}</span>)}
        </div>
      </header>

      <Section title="1. JSX and JavaScript expressions" description="Describe the UI declaratively and embed JavaScript expressions inside JSX.">
        <JsxExample />
      </Section>

      <Section title="2. Components and props" description="Pass read-only data into reusable function components.">
        <PropsExample />
      </Section>

      <Section title="3. State with useState" description="State represents data that changes over time and causes the component to render again.">
        <StateExample />
      </Section>

      <Section title="4. Event handling" description="Respond to user interactions with event handler functions.">
        <EventsExample />
      </Section>

      <Section title="5. Conditional rendering" description="Render loading, error, and success states based on application state.">
        <ConditionalRenderingExample />
      </Section>

      <Section title="6. Lists and keys" description="Render arrays of data and provide stable keys to help React track items.">
        <ListsAndKeysExample />
      </Section>

      <Section title="7. Forms and controlled inputs" description="Keep input values in React state and handle submission explicitly.">
        <FormsExample />
      </Section>

      <Section title="8. Component composition" description="Build flexible components by passing content through the children prop.">
        <CompositionExample />
      </Section>

      <footer className="footer">
        <p>Created by <strong>Ramu Boya</strong> · React Fundamentals</p>
        <p>
          <a href="https://github.com/Ramu-fsd" target="_blank" rel="noreferrer">GitHub</a>
          {' · '}
          <a href="https://www.linkedin.com/in/ramuboya" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </footer>
    </main>
  );
}
