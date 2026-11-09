# ADR-001: Use a Feature-Based Hybrid Structure

- **Status:** Accepted for this learning demo
- **Context:** The application models multiple business capabilities and should demonstrate maintainable boundaries.
- **Decision:** Keep application composition under `app`, business-specific code under `features`, and generic components/utilities under `shared`.
- **Consequences:** Feature code remains cohesive. Shared modules must remain domain-agnostic. Cross-feature dependencies need deliberate public APIs.
- **Alternatives considered:** A single type-based `components`, `hooks`, `services` structure; separate independently deployed micro-frontends.
- **Review trigger:** Revisit when independent team ownership, deployment, or runtime isolation becomes a real requirement.
