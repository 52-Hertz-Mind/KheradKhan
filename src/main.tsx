import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Pages/Homepage.tsx';
import Dashboard from './Pages/Dashboard.tsx';
import './i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
