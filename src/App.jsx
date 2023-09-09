import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css';
import { authProvider } from './services/auth.js';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    Component: Navigation,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'login',
        loader: loginLoader,
        Component: LoginPage,
      },
      {
        path: 'register',
        Component: RegisterPage,
      },
      {
        path: 'products',
        loader: protectedLoader,
        children: [{ index: true, Component: ProductsPage }],
      },
      { path: '*', Component: ErrorPage },
    ],
  },
]);

function loginLoader() {
  if (authProvider.isAuthenticated) {
    return redirect('/');
  }
  return null;
}

function protectedLoader() {
  if (!authProvider.isAuthenticated) {
    return redirect('/');
  }
  return null;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
