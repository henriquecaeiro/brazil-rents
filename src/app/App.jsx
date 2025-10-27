import React from 'react'
import { AppRoutes } from './routes.jsx'
import MainLayout from '@/layouts/MainLayout.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <MainLayout>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={4000}
        theme="colored"
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        draggable
      />
    </MainLayout>
  )
}
