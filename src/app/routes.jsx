import React, { Suspense, lazy } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'

// Lazy pages for code-splitting
const Home = lazy(() => import('@/pages/Home/Home.jsx'))
const About = lazy(() => import('@/pages/About/About.jsx'))
const Contact = lazy(() => import('@/pages/Contact/Contact.jsx'))
const NotFound = lazy(() => import('@/pages/NotFound.jsx'))

export function AppRoutes() {
  // Centralized route tree
  const element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/sobre', element: <About /> },
    { path: '/contato', element: <Contact /> },
    { path: '/404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ])

  return <Suspense fallback={<div style={{ padding: '1rem' }}>Loading...</div>}>{element}</Suspense>
}
