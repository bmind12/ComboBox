import React from 'react'
import ReactDOM from 'react-dom/client'
import i18n from 'i18next'
import { initReactI18next, I18nextProvider } from 'react-i18next'
import resources from './locales/index.json'
import App from './App.tsx'

const root = document.getElementById('root')

i18n
  .use(initReactI18next)
  .init(resources)
  .catch(error => {
    console.error('Failed to initialize i18n:', error)
  })

if (root !== null && root !== undefined) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  )
}
