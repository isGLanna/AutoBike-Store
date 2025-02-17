import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home/components/Home.tsx'
import './index.css'
import './top.bar.css'
import './.lib/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
)
