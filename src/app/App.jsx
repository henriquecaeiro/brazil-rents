import React from 'react'
import { AppRoutes } from './routes.jsx'
import MainLayout from '@/layouts/MainLayout.jsx'

export default function App() {
  // App shell: header/footer/navigation. Routes render inside.
  return (
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  )
}
