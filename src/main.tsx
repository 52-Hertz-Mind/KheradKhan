import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./Pages/Homepage.tsx";
import Dashboard from "./Pages/Dashboard.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: 'dashboard',
        element: <Dashboard/>
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
