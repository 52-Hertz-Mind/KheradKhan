import './App.css';
import './i18n';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material';
import Landing from './pages/Landing.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Books from './pages/Books.tsx';
import Highlights from './pages/Highlights.tsx';
import UserSetting from './pages/UserSetting.tsx';
import Review from './pages/Review.tsx';
import ReviewSetting from './pages/ReviewSetting.tsx';

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
      path: 'books/highlights/:bookId',
      element: <Highlights />,
    },
    {
      path: 'reviewsetting',
      element: <ReviewSetting />,
    },
    {
      path: 'usersetting',
      element: <UserSetting />,
    },
  ]);

  const theme = createTheme({
    // Define your custom color palette
    palette: {
      primary: {
        main: '#082584', // Custom purple color
      },
      secondary: {
        main: '#FFB6C1', // Custom pink color
      },
      background: {
        default: '#f9f9f9',
      },
    },

    // // Define global typography
    // typography: {
    //   fontFamily: 'IRANSans, Arial, sans-serif', // Use your custom font
    //   h1: {
    //     fontSize: '2.5rem',
    //     fontWeight: 'bold',
    //   },
    //   body1: {
    //     fontSize: '1rem',
    //   },
    // },

    // Customize MUI components globally
    components: {
      MuiTabs: {
        styleOverrides: {
          root: {
            backgroundColor: '#f1f3fc', // Light purple background
            borderRadius: '8px',
          },
          indicator: {
            backgroundColor: '#082584', // Custom tab indicator color
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            color: '#4f4f4f', // Default text color for tabs
            '&.Mui-selected': {
              color: '#082584', // Selected tab text color
              fontWeight: 'bold',
            },
            '&:hover': {
              backgroundColor: '#dce6ff', // Hover effect on tabs
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
}

export default App;
