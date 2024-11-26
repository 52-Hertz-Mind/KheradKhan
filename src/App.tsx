import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Pages/Landing.tsx';
import Dashboard from './Pages/Dashboard.tsx';
import './i18n';
import NotFoundPage from './Pages/NotFoundPage.tsx';
import Books from './Pages/Books.tsx';
import Highlights from './Pages/Highlights.tsx';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      errorElement: <NotFoundPage />,
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
    },
    {
      path: 'books',
      element: <Books />,
    },
    {
      path: 'books/highlights/:id',
      element: <Highlights />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
