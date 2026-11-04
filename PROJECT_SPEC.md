# MASTER BUILD PROMPT --- MOMENTUM

## Premium Event Discovery & Registration Platform

You are the lead frontend engineer, product designer and motion designer
responsible for building **MOMENTUM**, a polished,
production-quality-feeling event discovery and registration website for
a web-design assignment.

Your job is to create the actual working project files in the current
accessible workspace, run the application, test it and fix issues. Do
not merely explain what you would build or paste isolated snippets into
chat.

------------------------------------------------------------------------

# 1. FIRST: INSPECT THE WORKSPACE

Before changing anything:

1.  Inspect the current working directory and identify the project root.
2.  Check whether an existing MOMENTUM project or previously generated
    files are present.
3.  List the files and folders you find.
4.  Preserve useful existing work where possible.
5.  If the existing files are in a different or inaccessible workspace,
    explain that clearly and create the project in the current
    accessible workspace.
6.  Do not claim that files have been created unless they physically
    exist.

If the workspace is empty, initialize the project in a folder named
`momentum`. If a valid project already exists, work in that project
rather than creating an unnecessary nested folder.

------------------------------------------------------------------------

# 2. PRODUCT IDENTITY

**Brand:** MOMENTUM\
**Tagline:** Make every moment count.\
**Product:** Event discovery and registration platform.

MOMENTUM helps users discover upcoming events, explore detailed event
information, register for events, and manage their registrations.

Target audience and event types: - College festivals and competitions. -
Hackathons and technology workshops. - Music festivals and live
entertainment. - Business conferences and networking events. - Sports
events. - Arts and cultural experiences.

Use realistic fictional sample listings. Do not imply that fictional
events, sponsors, venues or endorsements are verified real-world
listings.

The final result should look like a credible premium event-discovery
startup, not a generic college assignment template.

------------------------------------------------------------------------

# 3. MANDATORY TECHNOLOGY STACK

Use this exact stack:

-   **Vite** --- project setup, development server and production build.
-   **React** --- frontend UI and reusable components.
-   **JavaScript ES6+** --- application logic. Do not use TypeScript.
-   **Tailwind CSS v4** --- styling, integrated using the official
    `@tailwindcss/vite` plugin.
-   **React Router DOM** --- client-side navigation.
-   **Lenis** --- smooth inertial scrolling.
-   **GSAP** --- advanced timeline, entrance, image and interaction
    animations. Use ScrollTrigger only where it materially improves the
    experience.
-   **Lucide React** --- icons.
-   **Local Storage** --- demo registration persistence and theme
    preference.
-   **Git and GitHub** --- version control.

Do not replace this stack with Next.js, another framework, TypeScript,
or a backend unless explicitly approved.

## Project initialization

If a project does not already exist, initialize it with:

``` bash
npm create vite@latest momentum -- --template react
cd momentum
npm install
npm install react-router-dom lucide-react lenis gsap
npm install tailwindcss @tailwindcss/vite
```

Configure `vite.config.js` with both the React and Tailwind Vite
plugins.

Use Tailwind CSS v4, including:

``` css
@import "tailwindcss";
```

Do not use Tailwind CSS v3 configuration instructions.

The project must support:

``` bash
npm run dev
npm run build
npm run preview
```

------------------------------------------------------------------------

# 4. CREATIVE DIRECTION --- PREMIUM, CINEMATIC, EDITORIAL

The visual quality is a major priority.

The website should feel: - Premium. - Cinematic. - Energetic. -
Modern. - Image-led. - Editorial. - Carefully art-directed. - Smooth and
responsive.

Avoid: - Generic dashboard templates. - Excessive gradients on every
element. - Random decorative blobs. - Excessive glassmorphism. - Huge
numbers of unrelated animation effects. - Tiny, cramped cards. -
Inconsistent spacing. - Default browser-looking controls. - Fake
functionality.

Create a coherent visual system. Use whitespace, typography, image
composition, contrast and restrained motion to create quality.

## Brand typography

Use: - **Space Grotesk** for headings and wordmark. - **Inter** for body
copy, forms and interface text.

Use sensible fallbacks and fluid typography with `clamp()` where
appropriate.

## Dark theme --- default

  Token              Value
  ------------------ -----------
  Background         `#101014`
  Surface            `#191920`
  Elevated surface   `#22222B`
  Soft surface       `#272733`
  Primary text       `#F5F5F7`
  Secondary text     `#A1A1AA`
  Muted text         `#777783`
  Border             `#30303A`
  Primary accent     `#8B5CF6`
  Primary hover      `#A78BFA`
  Secondary accent   `#22D3EE`
  Success            `#34D399`
  Warning            `#FBBF24`
  Error              `#F87171`

## Light theme

  Token              Value
  ------------------ -----------
  Background         `#F7F7FB`
  Surface            `#FFFFFF`
  Elevated surface   `#FFFFFF`
  Soft surface       `#F0EFF6`
  Primary text       `#171720`
  Secondary text     `#626273`
  Muted text         `#858595`
  Border             `#E3E2EA`
  Primary accent     `#7041D8`
  Primary hover      `#5D32BD`
  Secondary accent   `#087F98`
  Success            `#087F5B`
  Warning            `#946200`
  Error              `#C43D4B`

Implement themes using centralized CSS variables and a root attribute
such as `data-theme="dark"` or `data-theme="light"`.

Dark mode is the first-visit default. Persist the selected theme using
Local Storage. The toggle must work on every route. Prevent a visible
theme flash on initial load where practical. Both themes must be fully
designed and tested, including cards, navigation, forms, menus, dialogs,
toasts, image overlays and footer.

------------------------------------------------------------------------

# 5. CUSTOM CURSOR --- IMPORTANT VISUAL FEATURE

Create a beautiful custom cursor for compatible desktop pointer devices.

The cursor should feel refined and premium, not gimmicky.

## Cursor design

-   A small central dot or compact solid circle.
-   A larger softly animated outer ring.
-   Smooth, eased following movement.
-   Subtle scale response on hover.
-   Accent color coordinated with the active theme.
-   A restrained blend/glow effect only if it maintains contrast and
    readability.
-   Cursor movement should feel responsive, not laggy.

## Interactive cursor states

When hovering over: - Buttons: outer ring expands or changes shape
subtly. - Links: cursor indicates clickability. - Event cards: cursor
can show a small `VIEW` or arrow label. - Draggable/carousel controls:
show an appropriate interaction state. - Text inputs and text-selection
areas: restore a normal text/I-beam cursor; do not obscure text
selection or input caret.

## Cursor technical and accessibility requirements

-   Enable custom cursor only for fine pointer devices, such as desktop
    mouse input.
-   Disable it on touch devices and coarse pointers.
-   Respect `prefers-reduced-motion`.
-   Keep the native cursor as a fallback if JavaScript fails.
-   Do not globally hide the native cursor on mobile or touch screens.
-   Avoid interfering with clicks, text selection, browser controls,
    keyboard focus or accessibility.
-   Use pointer events and efficient animation techniques; avoid React
    state updates on every pointer movement.
-   Keep the cursor above page visuals with a controlled z-index, but do
    not let it intercept pointer events.
-   Ensure it remains visible and has sufficient contrast in both
    themes.
-   Test on desktop mouse and trackpad.

Use a dedicated reusable component, e.g. `CustomCursor.jsx`.

------------------------------------------------------------------------

# 6. MOTION DESIGN --- DEEP, SMOOTH, PURPOSEFUL ANIMATIONS

Animation quality is a core part of this project. Create a coherent
motion language rather than applying random effects everywhere.

Use GSAP for complex timelines and Lenis for inertial scrolling. Use CSS
transitions for simple hover/focus states. Do not use multiple competing
animation systems for the same element.

## 6.1 Lenis smooth scrolling

Implement Lenis through a reusable hook/provider or shared
application-level utility.

Required behavior: - Smooth, gently eased desktop mouse-wheel
scrolling. - Natural, controllable trackpad behavior. - Smooth anchor
navigation. - No abrupt stops or excessive floatiness. - Preserve normal
keyboard scrolling and browser navigation. - No scroll trapping or
scroll-jacking. - Native touch scrolling on mobile. - Disable Lenis when
`prefers-reduced-motion: reduce` is active. - Clean up animation frames
and event listeners. - Avoid duplicate Lenis instances. - Coordinate
Lenis with GSAP ScrollTrigger if ScrollTrigger is used. - If the library
fails, native browser scrolling must continue to work.

Do not force custom simulated touch scrolling on phones.

## 6.2 Page entrance and transitions

Create polished route transitions where feasible: - Subtle fade and
vertical movement for new page content. - Avoid blank screens or long
transition delays. - Do not break browser back/forward behavior. -
Ensure route content becomes accessible immediately. - Respect reduced
motion.

## 6.3 Scroll reveal

Use GSAP ScrollTrigger or IntersectionObserver for: - Section
headings. - Supporting text. - Featured event panels. - Event card
grids. - Image blocks. - Category sections.

Use restrained opacity and vertical movement. Reveal content once by
default. Ensure content is visible if JavaScript or an animation library
fails.

## 6.4 Staggered event cards

-   Event cards should enter in a coordinated stagger.
-   Use small offsets and short delays.
-   Avoid making users wait for the grid to become usable.
-   Animate on initial entry and optionally when filters change, without
    replaying excessively.

## 6.5 Image zoom and reveal

This is a key visual requirement.

Implement: - Gentle image scale on card hover. - Image reveal or
clip-path entrance for selected large visuals. - Subtle parallax or
scroll-linked movement for the hero image. - Consistent image crops and
aspect ratios. - Smooth transitions with no layout shift. - Use
`transform` and opacity where possible for performance.

Do not zoom images so much that important event subjects are cropped
out.

## 6.6 Hero animation

Create a cinematic homepage hero: - Strong typography entrance. -
Carefully staggered eyebrow, heading, description and CTA. - Large event
photography or a tasteful collage. - Slow, restrained background image
movement. - Optional soft accent light/gradient overlay for
legibility. - Avoid animation that delays the primary CTA.

## 6.7 Sticky navbar

-   Navbar remains accessible while scrolling.
-   Apply a subtle background, border or blur treatment after scrolling.
-   Avoid large resizing or layout shifts.
-   Active navigation state must remain clear.
-   Anchor targets must not be hidden under the sticky header.

## 6.8 Scroll progress

-   Thin accent progress bar at the top of the viewport.
-   Width represents scroll progress.
-   No layout shift and no pointer interception.
-   Handle pages with no scrollable height.

## 6.9 Back-to-top

-   Show after a meaningful scroll distance.
-   Hide near the top.
-   Accessible label and keyboard focus.
-   Use Lenis when active; native fallback otherwise.

## 6.10 Parallax

Use sparingly on the homepage hero and perhaps one featured visual.
Disable on mobile and for reduced-motion users. Do not use heavy effects
that cause layout shifts or reduce readability.

## 6.11 Reduced motion

When `prefers-reduced-motion: reduce` is active: - Do not initialize
Lenis. - Disable parallax. - Disable nonessential cursor movement. -
Remove or greatly reduce entrance transforms. - Make all content visible
immediately. - Avoid animated smooth scrolling. - Keep all interactions
and navigation functional.

------------------------------------------------------------------------

# 7. IMAGE ART DIRECTION

Use high-quality Unsplash imagery that looks like real event
photography.

Image themes: - Large technology conferences. - Hackathon participants
working together. - Live music and festival crowds. - Business speakers
and conference spaces. - Sports competitions. - Art exhibitions. -
Cultural performances. - Creative workshops.

Image requirements: - Use large landscape images for event banners and
cards. - Use consistent aspect ratios within each component. - Use
`object-fit: cover`. - Add meaningful alt text. - Use image overlays
only where necessary for contrast. - Use stable image URLs with
appropriate sizing parameters where supported. - Provide fallback
visuals if external images fail. - Avoid watermarked, low-resolution or
mismatched images. - Verify deployed image URLs. - Do not let a remote
image failure break the layout.

Use cinematic photography and intentional cropping. Avoid repeating the
same image across many event cards.

------------------------------------------------------------------------

# 8. APPLICATION PAGES AND ROUTES

Use React Router DOM.

Required routes:

-   `/` --- Home.
-   `/explore` --- Explore Events.
-   `/event/:id` --- Event Details.
-   `/register/:id` --- Registration.
-   `/my-events` --- My Events.
-   `*` --- Not Found.

## 8.1 Homepage

Sections in order: 1. Shared navbar. 2. Cinematic hero. 3.
Search/discovery entry. 4. Featured event. 5. Browse categories. 6.
Upcoming events grid. 7. Platform benefits. 8. Final CTA. 9. Shared
footer.

Suggested hero copy:

Eyebrow: `DISCOVER WHAT'S HAPPENING`\
Headline: `Make every moment count.`\
Description:
`Find events worth showing up for — from big ideas and new connections to unforgettable nights.`\
Primary CTA: `Explore events`

The hero should be visually striking, spacious and image-led.

## 8.2 Explore Events

Features: - Search by event name and description. - Category filter. -
Date filter. - City filter. - Sort by soonest, latest and optionally
alphabetical. - Results count. - Clear all filters. - Responsive event
grid. - Useful empty state. - Preserve filter state in query parameters
where practical. - All active filters must combine correctly.

## 8.3 Event Details

Display: - Large event banner. - Category. - Event title. - Date and
time. - Venue, city and address. - Short and full description. -
Agenda/schedule. - Organizer. - Capacity and available seats. -
Countdown timer. - Registration CTA.

Read event ID from the route. Unknown IDs must show a useful not-found
state and Explore link.

Countdown requirements: - Days, hours, minutes, seconds. - Handle
future, started and past events. - Never show negative time. - Clean up
timers when components unmount.

## 8.4 Registration

Fields: - Full name. - Email. - Indian mobile number. - Selected
event. - Optional college/organization.

Validation: - Required fields. - Trim whitespace. - Practical
email-format validation. - Accept a valid 10-digit Indian mobile number,
optionally with `+91`, spaces or hyphens. - Normalize phone and email
before duplicate checks. - Validate event ID. - Reject past and full
events. - Prevent duplicate registration for the same event using
normalized email or phone.

On success: - Generate a unique registration reference. - Save
registration in Local Storage. - Show a polished confirmation screen. -
Display event name, date, venue and reference. - Link to My Events.

Do not claim an email or SMS was sent.

## 8.5 My Events

Display: - Upcoming registrations. - Past registrations or clear status
grouping. - Event image, title, date and venue. - Registration
reference. - Status. - View details. - Cancel registration.

Cancellation: - Require confirmation. - Mark status as cancelled or
remove consistently; prefer preserving a cancelled status. - Exclude
cancelled registrations from capacity counts. - Recalculate
availability. - Prevent repeat cancellation. - Show confirmation
feedback.

------------------------------------------------------------------------

# 9. EVENT DATA AND LOCAL STORAGE

Create a central dataset of 12--15 fictional sample events.

Categories: - Technology. - Music. - Business. - Sports. - Arts. -
Cultural.

Use Indian cities including Bhubaneswar, Delhi, Mumbai and Bengaluru.

Suggested event names: - Future Forward Tech Summit. - Buildathon 24. -
UI/UX Design Lab. - Afterglow Music Festival. - Indie Nights Live. -
Startup Connect. - Product Leaders Forum. - City Football Cup. - Campus
Run. - The Creative Canvas. - Rhythm & Roots. - Spring Cultural Fest.

Each event should have: - Stable unique ID. - Title. - Category. - ISO
date. - Start/end time. - Time zone. - City. - Venue. - Address. -
Unsplash image URL. - Image alt text. - Short description. - Full
description. - Organizer. - Capacity. - Featured flag. - Agenda.

Use a consistent registration schema:

``` js
{
  id: "MOM-XXXXXXXX",
  eventId: "EVT001",
  fullName: "Alex Example",
  email: "alex@example.com",
  phone: "9876543210",
  organization: "Example University",
  registeredAt: "2026-11-04T10:00:00.000Z",
  status: "active"
}
```

Centralize Local Storage operations. Handle missing keys, malformed JSON
and write failures gracefully. Do not log personal registration details.

Local Storage is a browser-local educational demo, not a secure or
shared booking backend. Do not claim registrations sync across devices.

------------------------------------------------------------------------

# 10. RECOMMENDED REACT PROJECT STRUCTURE

Create a clean and maintainable Vite project:

``` text
momentum/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
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
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── EventDetails.jsx
│   │   ├── Register.jsx
│   │   ├── MyEvents.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   └── events.js
│   ├── context/
│   │   ├── ThemeContext.jsx
│   │   └── ToastContext.jsx
│   ├── hooks/
│   │   ├── useLenis.js
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   ├── storage.js
│   │   ├── validation.js
│   │   ├── date.js
│   │   └── registration.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
├── README.md
├── PROJECT_SPEC.md
└── .gitignore
```

Adjust only when there is a clear technical reason. Keep components
reusable and avoid giant page components.

------------------------------------------------------------------------

# 11. ENGINEERING QUALITY

-   Use React functional components and hooks.
-   Use semantic HTML.
-   Use descriptive component and variable names.
-   Keep state in the appropriate component/context.
-   Avoid unnecessary re-renders.
-   Avoid unsafe `innerHTML`.
-   Do not use inline event-handler attributes.
-   Use stable React keys.
-   Clean up timers, listeners, Lenis and GSAP instances.
-   Use GSAP context/revert patterns where appropriate.
-   Avoid duplicate animation timelines after route changes.
-   Use `prefers-reduced-motion`.
-   Use lazy loading for below-the-fold imagery.
-   Use image dimensions/aspect ratios to reduce layout shifts.
-   Add loading, empty, success and error states.
-   Keep browser console free of avoidable errors and warnings.
-   Do not add dependencies without a reason.

## Accessibility

-   Semantic landmarks and heading order.
-   Keyboard navigation.
-   Visible focus indicators.
-   Proper labels and form error associations.
-   Accessible mobile menu.
-   Accessible theme toggle.
-   Useful image alt text.
-   Adequate contrast in both themes.
-   Do not communicate state by color alone.
-   Custom cursor must not interfere with keyboard or text input.
-   Respect reduced-motion preference.

------------------------------------------------------------------------

# 12. DEVELOPMENT PHASES

Implement in controlled phases. Do not dump the whole application in one
unreviewed code generation step.

### Phase 1 --- Inspect and initialize

-   Inspect workspace.
-   Initialize or repair Vite + React.
-   Install required dependencies.
-   Configure Tailwind v4.
-   Confirm `npm run dev` works.
-   Confirm `npm run build` works.

### Phase 2 --- Design system

-   Typography.
-   Theme tokens.
-   Dark/light theme context and persistence.
-   Global layout.
-   Buttons, cards, badges, form styles.

### Phase 3 --- Shared shell and motion foundation

-   Navbar and mobile menu.
-   Footer.
-   Custom cursor.
-   Lenis integration.
-   GSAP setup.
-   Scroll progress.
-   Back-to-top.
-   Reduced-motion behavior.
-   Reusable reveal utilities.

### Phase 4 --- Homepage

-   Hero.
-   Featured event.
-   Categories.
-   Upcoming grid.
-   Benefits and CTA.
-   Hero and image motion.

### Phase 5 --- Explore

-   Search.
-   Filters.
-   Sorting.
-   Query parameter state.
-   Empty state.

### Phase 6 --- Event details

-   Dynamic route.
-   Event content.
-   Agenda.
-   Countdown.
-   Capacity.

### Phase 7 --- Registration

-   Form.
-   Validation.
-   Duplicate checks.
-   Registration ID.
-   Local Storage.
-   Confirmation.

### Phase 8 --- My Events

-   Registration list.
-   Empty state.
-   Cancellation.
-   Capacity recalculation.

### Phase 9 --- Motion and responsive polish

-   Tune Lenis.
-   Tune GSAP timelines.
-   Scroll reveals.
-   Image zoom/reveal.
-   Responsive animations.
-   Cursor states.
-   Test reduced motion.
-   Test both themes.

### Phase 10 --- QA and delivery

-   Fix all build errors.
-   Test all routes.
-   Test all interactions.
-   Test mobile, tablet and desktop.
-   Check image loading.
-   Create complete README.
-   Update PROJECT_SPEC.md to reflect React, Vite, Tailwind, GSAP, Lenis
    and the final architecture.
-   Prepare for GitHub and deployment.

------------------------------------------------------------------------

# 13. RESPONSIVE REQUIREMENTS

Test at: - 360px. - 390px. - 768px. - 1024px. - 1440px.

Mobile: - Native touch scrolling. - No custom cursor. - No heavy
parallax. - Single-column cards where appropriate. - Usable filters and
mobile navigation. - Comfortable touch targets. - No horizontal
overflow.

Tablet: - Two-column card grids where appropriate. - Compact navigation
and filters. - Reduced decorative motion.

Desktop: - Full navigation. - Three-column event grids where
appropriate. - Custom cursor on fine pointer devices. - Lenis inertial
scrolling. - Rich but restrained cinematic motion.

------------------------------------------------------------------------

# 14. ACCEPTANCE CHECKLIST

Do not call the project complete until these are verified.

## Setup

-   [ ] Actual files exist in the workspace.
-   [ ] Vite dev server starts.
-   [ ] Tailwind v4 works.
-   [ ] Production build succeeds.

## Design

-   [ ] MOMENTUM identity is consistent.
-   [ ] Dark theme works everywhere.
-   [ ] Light theme works everywhere.
-   [ ] Theme persists across refresh and routes.
-   [ ] Typography and spacing are consistent.
-   [ ] Event photography is high quality and relevant.

## Cursor and motion

-   [ ] Custom cursor works on desktop mouse.
-   [ ] Cursor reacts to interactive elements.
-   [ ] Cursor does not interfere with inputs or selection.
-   [ ] Cursor is disabled on touch/coarse pointer devices.
-   [ ] Lenis desktop inertia feels smooth and controllable.
-   [ ] Native mobile touch scrolling is preserved.
-   [ ] Anchor scrolling works.
-   [ ] Scroll reveals work.
-   [ ] Event images zoom smoothly.
-   [ ] Staggered cards work.
-   [ ] Sticky navbar transition works.
-   [ ] Scroll progress works.
-   [ ] Back-to-top works.
-   [ ] Parallax is subtle and selectively applied.
-   [ ] Reduced-motion preference is respected.
-   [ ] No hidden content if animations fail.
-   [ ] No duplicate GSAP or Lenis instances.

## Functionality

-   [ ] All routes work.
-   [ ] Search works.
-   [ ] Filters work together.
-   [ ] Sorting works.
-   [ ] Event details load by ID.
-   [ ] Countdown handles past/future events.
-   [ ] Registration validation works.
-   [ ] Duplicate registration prevention works.
-   [ ] Registration is persisted.
-   [ ] Confirmation is accurate.
-   [ ] My Events displays registrations.
-   [ ] Cancellation works.
-   [ ] Capacity excludes cancelled registrations.

## Delivery

-   [ ] README is complete.
-   [ ] PROJECT_SPEC.md matches the implemented stack.
-   [ ] `.gitignore` exists.
-   [ ] Production build passes.
-   [ ] No avoidable console errors.
-   [ ] Deployment instructions are documented.

------------------------------------------------------------------------

# 15. WORKSPACE AND DELIVERY RULES --- NON-NEGOTIABLE

The owner needs to see and access the actual project files.

Therefore:

1.  Create files directly in the current accessible project workspace.
2.  Do not only print code in chat.
3.  Do not create files in an undisclosed temporary directory.
4.  After each phase, report the exact project root and list
    created/modified files.
5.  Run commands in the actual project directory.
6.  Show the result of `npm run build`.
7.  If the environment cannot create files or run commands, state that
    limitation honestly and provide the exact next step.
8.  Do not claim success without verification.
9.  Preserve the project specification in `PROJECT_SPEC.md`.
10. Keep the repository ready for GitHub.

At the end, provide: - Project root path. - Summary of completed
features. - Files created/modified. - Commands to run locally. -
Build/test results. - Known limitations and remaining tasks.

------------------------------------------------------------------------

# FINAL CREATIVE STANDARD

MOMENTUM should feel like a premium event platform with a distinctive
visual identity and a carefully choreographed experience.

The custom cursor, smooth inertial scrolling, cinematic photography,
image zooms, layered reveals, parallax and page transitions should work
together as one coherent motion system.

**Make it beautiful, but keep it fast, accessible, responsive and
genuinely functional.**

Begin by inspecting the current workspace. Do not start by merely
describing the plan.
