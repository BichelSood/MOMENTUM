# MOMENTUM — Event Discovery & Management

A responsive, multi-page event discovery and registration demo built with HTML, CSS and vanilla JavaScript modules. All listings are fictional sample events. Registrations are stored locally in the current browser.

## Features
- Explore 15 sample events across six categories and multiple Indian cities.
- Search, category, date, city and sorting filters with URL state.
- Event details, agenda, local capacity and countdown.
- Validated registration with duplicate checks and browser Local Storage.
- My Events with cancellation; dark and light themes.
- Responsive layouts and reduced-motion-aware reveal effects.

## Run locally
From this directory, run `python3 -m http.server 8000` and open http://localhost:8000. ES modules require an HTTP server.

## Structure
`index.html`, `explore.html`, `event.html`, `register.html`, `my-events.html`; shared styles in `css/`; data, components, page scripts and utilities in `js/`.

## Storage and limitations
`momentum-theme` stores the theme and `momentum-registrations` stores registrations in localStorage. Data is browser-specific and is not synchronized. This frontend demo has no backend, authentication, email delivery, payment processing or authoritative inventory. Do not use real personal data.

## Credits
Event photos are served from Unsplash. Fonts: DM Sans and Space Grotesk via Google Fonts.

## Deployment
Static-host ready (Netlify, Vercel or GitHub Pages). Live deployment and public repository links are not configured yet.
