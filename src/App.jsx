import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { CustomCursor } from './components/CustomCursor.jsx';
import { ScrollProgress } from './components/ScrollProgress.jsx';
import { BackToTop } from './components/BackToTop.jsx';
import { Toast } from './components/Toast.jsx';
import { useLenis } from './hooks/useLenis.js';
import { Home } from './pages/Home.jsx';
import { Explore } from './pages/Explore.jsx';
import { EventDetails } from './pages/EventDetails.jsx';
import { Register } from './pages/Register.jsx';
import { MyEvents } from './pages/MyEvents.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { PageTransition } from './components/PageTransition.jsx';
import { getLenis } from './hooks/useLenis.js';

function RouteScrollManager() {
  const location = useLocation();
  const positions = useRef(new Map());
  useEffect(() => {
    const save = () => positions.current.set(location.key, window.scrollY);
    window.addEventListener('scroll', save, { passive: true });
    return () => window.removeEventListener('scroll', save);
  }, [location.key]);
  useLayoutEffect(() => {
    const position = positions.current.get(location.key) || 0;
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(position, { immediate: true, force: true });
    else window.scrollTo(0, position);
  }, [location.key]);
  return null;
}

export default function App() {
  useLenis();
  return <>
    <ScrollProgress />
    <Navbar />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <RouteScrollManager />
    <PageTransition>
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/register/:id?" element={<Register />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    </PageTransition>
    <Footer />
    <BackToTop />
    <CustomCursor />
    <Toast />
  </>;
}
