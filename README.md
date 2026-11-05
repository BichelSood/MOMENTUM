# MOMENTUM

### Make Every Moment Count.

**A premium event discovery and registration platform.**

MOMENTUM is a modern, interactive event discovery platform designed to bring people closer to experiences worth attending. It provides a unified space to explore events, discover communities, view event details, register for experiences, and manage upcoming plans.

Built with a focus on visual storytelling, intuitive navigation, and carefully orchestrated motion, MOMENTUM combines a cinematic interface with practical event discovery and registration workflows.

---

## 01. Overview

Discovering interesting events should feel as exciting as attending them.

MOMENTUM approaches event discovery as more than a conventional listing experience. It combines editorial-style layouts, immersive photography, interactive elements, and smooth transitions to create an engaging browsing experience.

The platform features a curated collection of fictional events across multiple categories and Indian cities, allowing users to explore experiences, examine event information, and manage their registrations through a responsive interface.

**Core objectives**

- Create an engaging and visually distinctive event discovery experience.
- Make event exploration intuitive through search, filtering, and categorization.
- Provide a structured event details and registration workflow.
- Deliver consistent interactions across desktop, tablet, and mobile.
- Establish a reusable and maintainable frontend architecture.

## 02. Key Features

### Event Discovery
- Curated collection of 15 fictional events.
- Six event categories: Technology, Music, Business, Sports, Arts, and Cultural.
- Featured events and upcoming experiences.
- Search across event names, descriptions, cities, venues, and categories.
- Filtering by category, date, and city.
- Sorting by date and alphabetical order.
- URL-based filter state for shareable and navigable search results.

### Event Information
- Dedicated event detail pages.
- Event photography, descriptions, venue and location information.
- Event schedules and agendas.
- Live countdown displaying days, hours, minutes, and seconds.
- Local demonstration of event capacity and remaining places.

### Registration Management
- Registration forms with input validation.
- Email and Indian mobile number validation.
- Duplicate registration prevention.
- Unique registration reference generation.
- Registration confirmation interface.
- Personal registration management through My Events.
- Registration cancellation with capacity recalculation.

### Personalization
- Dark and light themes.
- Theme preference persistence.
- Responsive navigation and mobile menu.
- Interactive custom cursor for compatible desktop devices.

## 03. Technology Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based UI development |
| Vite 8 | Development environment and production bundling |
| JavaScript ES6+ | Application logic |
| Tailwind CSS v4 | Utility-first styling |
| React Router DOM | Client-side routing |
| GSAP | Animation orchestration and transitions |
| GSAP ScrollTrigger | Scroll-based animation and reveals |
| Lenis | Smooth inertial scrolling |
| Lucide React | Interface icons |
| Browser Local Storage | Theme and registration persistence |

The application uses a frontend-focused architecture without a separate backend service.

## 04. Architecture & Project Structure

MOMENTUM follows a modular React architecture in which interface components, application pages, shared state, reusable hooks, event data, and utility functions are separated by responsibility.

This separation keeps the application organized, simplifies maintenance, and allows individual features to evolve without unnecessarily affecting the rest of the system.

### Directory Structure

```text
MOMENTUM/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── EventCard.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ThemeToggle.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── BackToTop.jsx
│   │   ├── PageTransition.jsx
│   │   └── Toast.jsx
│   │
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── ToastContext.jsx
│   │
│   ├── data/
│   │   └── events.js
│   │
│   ├── hooks/
│   │   ├── useLenis.js
│   │   ├── useCardReveal.js
│   │   └── useLocalStorage.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Register.jsx
│   │   ├── MyEvents.jsx
│   │   └── NotFound.jsx
│   │
│   ├── utils/
│   │   ├── storage.js
│   │   ├── validation.js
│   │   ├── date.js
│   │   └── registration.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
├── netlify.toml
├── vercel.json
├── PROJECT_SPEC.md
├── README.md
└── .gitignore
```

### Architectural Responsibilities

**Components — Reusable Interface Layer**

Shared interface elements are developed as independent React components. Components such as `EventCard`, `CategoryCard`, `Navbar`, and `SearchBar` are reused across multiple pages.

This avoids duplicated interface code and ensures consistent behaviour and styling throughout the application.

**Pages — Application Layer**

Each page represents a distinct application workflow. The pages consume shared components, event data, context providers, and utility functions to implement their respective functionality.

**Context — Shared State Management**

React Context provides application-wide state for:

- Theme selection and persistence.
- Toast notifications and user feedback.

This avoids unnecessary prop drilling for functionality shared across multiple components.

**Hooks — Reusable Behaviour**

Custom hooks encapsulate functionality that is reused across the application.

- `useLenis` manages the smooth-scrolling lifecycle.
- `useCardReveal` manages scroll-triggered content reveals.
- `useLocalStorage` provides reusable browser storage state.

**Data & Utilities — Application Logic**

Event information is maintained in a centralized dataset. Date formatting, registration references, input validation, and browser storage operations are separated into utility modules.

This keeps application logic independent of the presentation layer.

## 05. Application Navigation & Workflows

React Router DOM manages client-side navigation without requiring full-page reloads.

| Route | Responsibility |
|---|---|
| `/` | Homepage and featured experiences |
| `/explore` | Event discovery and filtering |
| `/event/:id` | Individual event information |
| `/register/:id` | Event registration |
| `/my-events` | Registration management |
| `*` | Not Found page |

### Event Discovery Workflow

Users begin on the homepage, where featured events, categories, and upcoming experiences provide entry points into the platform.

The Explore page provides a more detailed discovery interface. Search queries and selected filters can be represented through URL query parameters, allowing the discovery state to remain navigable.

### Registration Workflow

The registration process follows a structured sequence:

1. Select an available event.
2. Enter participant information.
3. Validate the submitted details.
4. Check for existing registrations.
5. Generate a unique registration reference.
6. Save the registration in browser storage.
7. Display a confirmation screen.

### My Events Workflow

The My Events page retrieves locally saved registrations and organizes them into upcoming, past, and cancelled groups.

Users can inspect registration details, revisit event pages, and cancel active registrations. Cancelled registrations retain their historical status rather than being silently discarded.

## 06. Motion Design & Interaction Architecture

One of the defining characteristics of MOMENTUM is its motion system.

Rather than treating animation as decoration, the application uses motion to establish visual hierarchy, guide attention, and create continuity between different sections of the interface.

The implementation combines GSAP, ScrollTrigger, Lenis, and CSS transitions, with each technology serving a distinct purpose.

### 6.1 Lenis — Smooth Scrolling

Lenis is used to introduce controlled inertial scrolling on compatible desktop pointer devices.

The implementation is centralized in `useLenis.js`, preventing individual pages from creating independent scrolling instances.

Key implementation details:

- Smooth desktop wheel scrolling.
- Controlled scrolling duration and wheel sensitivity.
- Smooth anchor navigation.
- GSAP ticker integration for animation-frame synchronization.
- ScrollTrigger updates during Lenis scrolling.
- Cleanup of animation frames and event listeners.
- Native browser scrolling retained as a fallback.

Lenis is disabled for coarse-pointer devices and users who prefer reduced motion. Mobile devices retain native touch scrolling.

This distinction is important because desktop wheel scrolling and mobile touch interaction have different expectations.

### 6.2 GSAP — Animation Orchestration

GSAP manages more complex animations through reusable timelines and animation contexts.

It is responsible for:

- Homepage hero entrance animations.
- Staggered text reveals.
- Hero image clip-path transitions.
- Scroll-linked visual movement.
- Page transition effects.
- Scroll-triggered section and card reveals.

Using GSAP for coordinated animations allows multiple elements to move together with consistent easing and timing.

### 6.3 ScrollTrigger — Scroll-Based Reveals

ScrollTrigger is used to introduce content progressively as users move through the page.

The `useCardReveal` hook centralizes the reveal behaviour.

Selected elements include:

- Section headings.
- Featured event panels.
- Category collections.
- Event cards.
- Benefits sections.
- Closing call-to-action sections.

Elements enter with subtle opacity and vertical movement. ScrollTrigger batching coordinates groups of elements rather than triggering unrelated animations independently.

### 6.4 Image Zoom & Visual Transitions

Photography plays an important role in MOMENTUM's visual identity.

Images use controlled transitions to make the interface feel more interactive without overwhelming the content.

Implemented effects include:

- Smooth image scaling on event-card hover.
- Featured panel image zoom.
- Cinematic hero image reveal.
- Scroll-linked hero image movement on compatible desktop devices.
- Consistent image cropping using `object-fit: cover`.

The effects rely primarily on transforms and opacity to avoid unnecessary layout changes.

### 6.5 Custom Cursor

MOMENTUM includes a custom cursor designed specifically for desktop mouse and trackpad interaction.

The cursor consists of a central dot and a larger animated outer ring.

GSAP's `quickTo()` is used to interpolate cursor movement, providing smooth tracking without updating React state for every pointer movement.

Interactive states respond to links, buttons, inputs, and specially labelled event cards.

The cursor is disabled on coarse-pointer devices and when reduced motion is requested. It also preserves native text interaction and does not intercept pointer events.

### 6.6 Page Transitions & Navigation

The `PageTransition` component provides subtle route-change animations using GSAP.

The shared navigation bar remains sticky and changes its visual treatment when the page is scrolled.

Additional navigation enhancements include:

- Active route indication.
- Responsive mobile navigation.
- Scroll progress indicator.
- Back-to-top interaction.
- Scroll-position management during route navigation.

Together, these elements create a more continuous browsing experience rather than making each page feel disconnected.

### 6.7 Motion Accessibility

Motion is designed to remain optional rather than essential to application functionality.

The application checks the user's `prefers-reduced-motion` setting and adjusts its behaviour accordingly.

When reduced motion is enabled:

- Lenis is not initialized.
- Custom cursor movement is disabled.
- Parallax effects are disabled.
- Nonessential entrance animations are removed.
- Content remains accessible without animation.

## 07. Design System & Visual Language

MOMENTUM follows a premium editorial design direction, using typography, photography, whitespace, and restrained accent colours to establish a consistent identity.

### Typography

- **Space Grotesk:** Headlines, wordmark, and prominent interface headings.
- **Inter:** Body text, navigation, forms, and supporting information.

Fluid typography using CSS `clamp()` helps maintain appropriate proportions across screen sizes.

### Colour System

The application supports two complete themes through centralized CSS custom properties.

| Design Token | Dark Theme | Light Theme |
|---|---|---|
| Background | `#101014` | `#F7F7FB` |
| Surface | `#191920` | `#FFFFFF` |
| Elevated Surface | `#22222B` | `#FFFFFF` |
| Primary Text | `#F5F5F7` | `#171720` |
| Secondary Text | `#A1A1AA` | `#626273` |
| Primary Accent | `#8B5CF6` | `#7041D8` |
| Secondary Accent | `#22D3EE` | `#087F98` |

Dark mode is the default theme. Theme preferences are stored using the `momentum-theme` Local Storage key and applied through the root `data-theme` attribute.

## 08. Data Management & Persistence

MOMENTUM currently uses a centralized JavaScript event dataset and browser Local Storage.

### Event Dataset

The `src/data/events.js` module maintains the event catalogue.

Each event includes:

- Unique event identifier.
- Event title and category.
- Date and start/end time.
- Time zone.
- City, venue, and address.
- Event image and alternative text.
- Short and detailed descriptions.
- Organizer information.
- Capacity.
- Featured-event indicator.
- Event agenda.

The dataset contains 15 fictional sample events across Indian cities.

### Local Storage

Two primary storage keys are used:

| Key | Purpose |
|---|---|
| `momentum-theme` | Stores the selected interface theme |
| `momentum-registrations` | Stores browser-local registration records |

Storage operations are centralized in `src/utils/storage.js`.

The implementation includes handling for missing values, malformed stored JSON, and storage write failures.

Registration records maintain their event association, participant details, registration reference, timestamp, and status.

## 09. Responsive Design & Accessibility

The interface is designed to adapt across desktop, tablet, and mobile environments.

### Responsive Behaviour

| Device | Interface Behaviour |
|---|---|
| Desktop | Full navigation, three-column event grids, custom cursor and inertial scrolling |
| Tablet | Compact layouts, adjusted navigation and two-column event grids |
| Mobile | Responsive navigation, native touch scrolling and single-column event layouts |

The layout uses CSS Grid, Flexbox, responsive breakpoints, and fluid typography to maintain consistent visual proportions.

### Accessibility Considerations

- Semantic HTML and meaningful page structure.
- Keyboard-accessible navigation and controls.
- Visible focus indicators.
- Accessible form labels and validation feedback.
- Alternative text for event photography.
- Reduced-motion support.
- Responsive mobile navigation.
- Custom cursor fallbacks.
- Theme-aware contrast and interface states.

## 10. Deployment Configuration

The project includes configuration for both Netlify and Vercel.

**Production build**

The application uses Vite to generate an optimized production build in the `dist` directory.

**Netlify**

The `netlify.toml` configuration defines the build command, publishing directory, and fallback rewrite required for client-side React Router navigation.

**Vercel**

The `vercel.json` configuration provides a rewrite to `index.html`, allowing application routes to be handled by React Router.

Production output can be generated using:

```bash
npm run build
```

The generated `dist` directory contains the deployable frontend application.

## 11. Current Scope & Limitations

MOMENTUM is currently a frontend demonstration with fictional event data and browser-local registration persistence.

The following limitations are intentional in the current implementation:

- No backend API or database.
- No user authentication or account management.
- Registrations are stored only in the current browser.
- Event capacity is simulated locally and is not shared between users.
- No payment processing.
- No email or SMS notifications.
- Event listings and venues are fictional sample data, not verified announcements.

Registration information should not be treated as secure booking data or entered as real participant information.

## 12. Project Information

**Project:** MOMENTUM  
**Category:** Event Discovery & Registration Platform  
**Architecture:** React-based Single Page Application  
**Build Tool:** Vite  
**Styling:** Tailwind CSS v4  
**Animation:** GSAP, ScrollTrigger & Lenis  
**Language:** JavaScript ES6+

**Author:** Bichel Sood  
**Repository:** [MOMENTUM](https://github.com/BichelSood/MOMENTUM)

---

<p align="center">

**MOMENTUM**

*Make Every Moment Count.*

</p>
