import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import { SnackbarProvider } from 'notistack'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <AuthProvider>
     <SnackbarProvider>
     <RouterProvider router={router} />
     </ SnackbarProvider>
     </AuthProvider>
  </StrictMode>,
)
