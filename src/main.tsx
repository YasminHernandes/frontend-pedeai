import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SignUpRestaurant } from './pages/index.ts'
import { App } from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/public/restaurants',
    element: <SignUpRestaurant/>
  },
])


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
