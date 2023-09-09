import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductAddPage from './pages/ProductAddPage.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css';
import { authProvider } from './services/auth.js';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader: rootLoader,
    Component: Navigation,
    children: [
      {
        index: true,
        loader: protectedLoader,
        Component: HomePage,
      },
      {
        path: 'login',
        loader: loginRegistrationLoader,
        Component: LoginPage,
      },
      {
        path: 'register',
        loader: loginRegistrationLoader,
        Component: RegisterPage,
      },
      {
        path: 'products',
        loader: protectedLoader,
        children: [
          { index: true, Component: ProductsPage },
          { path: '/products/add', Component: ProductAddPage },
        ],
      },
      { path: '*', Component: ErrorPage },
    ],
  },
]);

function rootLoader() {
  if (localStorage.getItem('token')) {
    authProvider.isAuthenticated = true;
  }
  return null;
}

function loginRegistrationLoader() {
  if (authProvider.isAuthenticated) {
    return redirect('/');
  }
  return null;
}

function protectedLoader() {
  if (!authProvider.isAuthenticated) {
    return redirect('/login');
  }
  return null;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
