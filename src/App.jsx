import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import './App.css';

const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    // loader() {
    //   // Our root route always provides the user, if logged in
    //   return { user: fakeAuthProvider.username };
    // },
    Component: Navigation,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'login',
        // action: loginAction,
        // loader: loginLoader,
        Component: LoginPage,
      },
      {
        path: 'register',
        Component: RegisterPage,
      },
      {
        path: 'products',
        children: [
          { index: true, Component: ProductsPage },
          // { path: '/products/add/:id', element: <h1>add product</h1> },
        ],
      },
      { path: '*', Component: ErrorPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
