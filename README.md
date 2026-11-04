# MOMENTUM

A premium, responsive event discovery and registration demo built with React, Vite, Tailwind CSS v4, and JavaScript. It uses fictional sample listings and stores registrations only in the current browser.

## Features

- Cinematic homepage, editorial event cards, six event categories, and 15 fictional events in Indian cities.
- React Router routes for Home, Explore, event details, registration, My Events, and Not Found.
- Search, category, date, city, sort, URL filter state, and useful empty results.
- Countdown, agenda, local capacity display, registration validation, duplicate prevention, reference numbers, cancellation, and Local Storage persistence.
- Dark and light themes, responsive navigation, accessible custom desktop cursor, Lenis inertial scrolling, GSAP transitions/reveals, scroll progress, and back-to-top.
- Reduced-motion and coarse-pointer fallbacks.

## Run locally

Requirements: Node.js 20.19+ or 22.12+.

    npm install
    npm run dev

Create a production build and serve it locally:

    npm run build
    npm run preview

## Stack

Vite, React, JavaScript ES6+, Tailwind CSS v4 with the official Vite plugin, React Router DOM, GSAP, Lenis, Lucide React, and browser Local Storage.

## Project structure

- src/assets/
- src/components/
- src/context/
- src/data/events.js
- src/hooks/
- src/pages/
- src/utils/
- src/App.jsx, src/index.css, src/main.jsx
- public/favicon.svg

## Local data and limitations

The momentum-theme key stores the selected theme. The momentum-registrations key stores registration details in localStorage on this device and browser. This is a frontend educational demo, not a secure booking service: there is no backend, account system, email or SMS delivery, payment processing, or authoritative seat inventory. Do not enter sensitive or real participant details.

Listings are fictional and should not be treated as verified event announcements. Photography is served from Unsplash; typography uses Inter and Space Grotesk from Google Fonts.

## Deployment

Build with `npm run build`, then publish the `dist` folder. The included `netlify.toml` configures that build and rewrites client routes to `index.html` for React Router. No public repository or deployed URL is configured yet.
