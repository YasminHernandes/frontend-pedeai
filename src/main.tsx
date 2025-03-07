import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AdminOrders, AdminRegisterProducts, SearchRestaurant, SignUpRestaurant, LoginRestaurant, AdminHome, AdminProducts} from './pages/index.ts'
import { App } from './App.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/login',
    element: <LoginRestaurant/>
  },
  {
    path: '/restaurants',
    element: <SignUpRestaurant/>
  },
  {
    path: '/search',
    element: <SearchRestaurant/>
  },
  {
    path: '/admin',
    element: <AdminHome/>,
  },
  {
    path: '/admin/orders',
    element: <AdminOrders/>,
  },
  {
    path: '/admin/products',
    element: <AdminProducts/>,
  },
  {
    path: '/admin/products/new',
    element: <AdminRegisterProducts/>,
  },
])


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
