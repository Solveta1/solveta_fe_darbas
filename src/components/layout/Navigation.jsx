import { Link, Outlet, useNavigate } from 'react-router-dom';
import { authProvider } from '../../services/auth';
import Footer from '../Footer';

function Navigation() {
  const navigate = useNavigate();

  const handleSignout = (event) => {
    event.preventDefault();
    authProvider.signout();
    navigate('/');
  };

  if (authProvider.isAuthenticated) {
    return (
      <div>
        <nav className='p-6 h-12  bg-zinc-900 '>
          <ul className='m-0 list-none flex flex-row justify-between items-center'>
            <li>
              <img className='w-14' src='../../logo.jpg' alt='logo' />
            </li>
            <li>
              <Link
                className='text-gray-300 text-lg m-0 hover:text-sky-400'
                to='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-300 text-lg m-0 hover:text-sky-400'
                to='/products'
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className='text-gray-300 text-lg m-0 hover:text-sky-400'
                to='/products/add'
              >
                Add product
              </Link>
            </li>
            <li>
              <button className='text-lg' type='button' onClick={handleSignout}>
                Sign out
              </button>
            </li>
          </ul>
        </nav>
        <Outlet />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <nav className='p-4 h-12  bg-zinc-900 '>
        <ul className='m-0 mr-40 list-none flex flex-row justify-between items-center'>
          <li>
            <img className='w-14' src='../../logo.jpg' alt='logo' />
          </li>
          <li>
            <Link
              className='text-gray-300 text-lg m-0 hover:text-sky-400'
              to='/login'
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              className='text-gray-300 hover:text-sky-400 text-lg'
              to='/register'
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
}

export default Navigation;
