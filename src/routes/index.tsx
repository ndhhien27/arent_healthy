import { createBrowserRouter } from 'react-router-dom';

import Column from '@/pages/column';
import ErrorPage from '@/pages/error';
import Home from '@/pages/home';
import Login from '@/pages/login';
import MyProfile from '@/pages/my-profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/my-profile',
    element: <MyProfile />,
  },
  {
    path: '/column',
    element: <Column />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
