import React from 'react'
import { LoadingProvider } from '@/contexts/LoadingContext'

export function AppProviders({ children }) {
  return <LoadingProvider>{children}</LoadingProvider>
}
