import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './CreateAccount/components/createAccount.tsx'
import './index.css'
import './styles/colors.css'
import './styles/Topbar.css'
import './.lib/i18n'
import './CreateAccount/styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
