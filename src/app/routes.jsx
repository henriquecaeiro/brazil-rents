import React, { Suspense, lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

// Lazy load pages for better code-splitting and initial load performance.
const Home = lazy(() => import('@/pages/Home/Home.jsx'));
const About = lazy(() => import('@/pages/About/About.jsx'));
const Contact = lazy(() => import('@/pages/Contact/Contact.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.jsx'));

/**
 * Defines the application's routes using `react-router-dom`.
 * It includes lazy-loaded pages and a catch-all route for 404 errors.
 *
 * @returns {JSX.Element} A suspense-wrapped element containing the current route's component.
 */
export function AppRoutes() {
  // Centralized route configuration.
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sobre', element: <About /> },
    { path: '/contato', element: <Contact /> },
    { path: '/404', element: <NotFound /> },
    // Redirect any unknown paths to the 404 page.
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);

  // Wrap routes in Suspense to handle lazy loading.
  return <Suspense fallback={<div style={{ padding: '1rem' }}>Loading...</div>}>{element}</Suspense>;
}