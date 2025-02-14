import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './route-tree.gen'
import './index.css'
import './lib/i18n'

const route = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof route
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)