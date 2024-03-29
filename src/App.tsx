import React, { type ReactNode } from 'react'
import './global.css'
import FormPage from './pages/FormPage'

const App: React.FC<Record<string, never>> = (): ReactNode => {
  return <FormPage />
}

export default App
