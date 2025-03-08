import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AdminOrders, AdminRegisterProducts, SearchRestaurant, SignUpRestaurant, LoginRestaurant, AdminHome, AdminProducts, NotFound, UserHome, ProductDetails, UserOrders, Checkout, Cart} from './pages/index.ts'
import { App } from './App.tsx'

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound/>,
  },
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
    path: '/admin/:restaurantID',
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
  {
    path: '/:restaurantID',
    element: <UserHome/>,
  },
  {
    path: '/:restaurantID/  :productName',
    element: <ProductDetails/>,
  },
  {
    path: '/:restaurantID/cart',
    element: <Cart/>,
  },
  {
    path: '/cart/checkout',
    element: <Checkout/>,
  },
  {
    path: '/:restaurantID/orders',
    element: <UserOrders/>,
  },
])


createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
