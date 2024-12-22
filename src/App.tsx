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
import UserSetting from './Pages/UserSetting.tsx';
import { ThemeOptions } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material';
import Favorites from './Pages/Favorites.tsx';
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
    {
      path: 'usersetting',
      element: <UserSetting />,
    },
    {
      path: 'favorites',
      element: <Favorites />,
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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
