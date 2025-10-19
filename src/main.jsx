import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayouts from './layouts/MainLayouts.jsx'
import Home from './components/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import AuthProvider from './contexts/AuthProvider.jsx'
import AddCoffee from './pages/AddCoffee.jsx'
import axios from 'axios'
import CoffeeDetails from './components/CoffeeDetails.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        path: "/",
        loader: () => axios(`${import.meta.env.VITE_API_URL}/coffees`),
        Component: Home,
      },
      {
        path: "/addCoffe",
        Component: AddCoffee
      },
      {
        path: "coffee/:id",
        loader: ({params}) => axios(`${import.meta.env.VITE_API_URL}/coffee/${params.id}`),
        Component: CoffeeDetails
      },
      {
        path: "signIn",
        Component: SignIn
      },
      {
        path: "signUp",
        Component: SignUp
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
