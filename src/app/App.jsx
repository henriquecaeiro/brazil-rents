import React from 'react';
import { AppRoutes } from './routes.jsx';
import MainLayout from '@/layouts/MainLayout.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * The main application component.
 * It sets up the main layout, routing, and toast notifications.
 *
 * @returns {JSX.Element} The root element of the application.
 */
export default function App() {
  return (
    <MainLayout>
      <AppRoutes />
      {/* Global toast container for notifications */}
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
  );
}