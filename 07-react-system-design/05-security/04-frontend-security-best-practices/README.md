# Frontend Security Best Practices

## Threat modeling prompts
- What data is visible to each user role?
- Can a user alter an identifier and access another customer's record?
- Can untrusted text become executable HTML?
- Are tokens or personal data persisted in the browser?
- Can a request be replayed or submitted twice?
- Are dependencies and third-party scripts trusted?
- What is exposed through source maps, logs and error reports?

## Important distinction
Hiding a control, guarding a route or checking a role in React improves user experience. It does not protect the API. Enforce permissions and data access rules on the server for every request.
