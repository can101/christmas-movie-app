import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './app'
import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
)
