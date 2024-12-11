import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './Pages/Landing.tsx';
import Dashboard from './Pages/Dashboard.tsx';
import './i18n';
import NotFoundPage from './Pages/NotFoundPage.tsx';
import Books from './Pages/Books.tsx';
import Highlights from './Pages/Highlights.tsx';
import Review from './Pages/Review.tsx';
import ReviewSetting from './Pages/ReviewSetting.tsx';
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
      path: 'review',
      element: <Review />,
    },
    {
      path: 'books/highlights/:id',
      element: <Highlights />,
    },
    {
      path: 'reviewsetting',
      element: <ReviewSetting />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
