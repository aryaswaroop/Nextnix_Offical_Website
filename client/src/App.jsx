
import React, { Suspense, lazy } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion';

import MainLayout from './layouts/MainLayout';

// ========================================
// 1. LAZY LOADED PAGES
// ========================================

const Home = lazy(() => import('./pages/public/Home'));
const About = lazy(() => import('./pages/public/About'));
const Services = lazy(() => import('./pages/public/Services'));
const Learn = lazy(() => import('./pages/public/Learn'));
const Blog = lazy(() => import('./pages/public/Blog'));
const Contact = lazy(() => import('./pages/public/Contact'));
const Dashboard = lazy(() => import('./pages/public/Dashboard'));

// ========================================
// 2. PAGE LOADING FALLBACK
// ========================================

function PageLoader() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{
        color: '#051D67',
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 600,
        fontSize: '1.5rem',
      }}
    >
      Loading Nextnix...
    </div>
  );
}

// ========================================
// 3. ANIMATED ROUTES
// ========================================

function AnimatedRoutes() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 12,
    },

    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.35,
        ease: [0.22, 1, 0.36, 1],
      },
    },

    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -8,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
        style={{ minHeight: '100vh' }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            {/* Public Website Layout */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="learn" element={<Learn />} />
              <Route path="blog" element={<Blog />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
            </Route>

            {/* Dashboard - Separate Layout */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

// ========================================
// 4. MAIN APPLICATION
// ========================================

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
