# XSS and CSRF

## Cross-Site Scripting (XSS)
- React escapes text interpolation by default.
- Avoid `dangerouslySetInnerHTML`; if unavoidable, use a vetted sanitizer and strict content policy.
- Do not build HTML strings from untrusted input.
- Apply a Content Security Policy appropriate to the application.
- Keep dependencies updated and review third-party scripts.

## Cross-Site Request Forgery (CSRF)
CSRF matters especially when browsers automatically attach cookies to requests.
- Use appropriate SameSite cookie settings.
- Use anti-CSRF tokens or another validated defense for state-changing requests.
- Validate Origin/Referer as an additional control where appropriate.
- Do not rely on CORS alone as a CSRF defense.

## Exercise
Threat-model a payment initiation form where the session is cookie-based.
