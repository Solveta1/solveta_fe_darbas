import { Link, Outlet, useNavigate } from 'react-router-dom';
import { authProvider } from '../../services/auth';

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
        <nav className='h-12 p-2 bg-zinc-900'>
          <ul className='list-none  flex flex-row justify-around'>
            <li>
              <img src='./Vector.png' alt='bug' height={100} />
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/products/add'>Add product</Link>
            </li>
            <li>
              <button type='button' onClick={handleSignout}>
                Sign out
              </button>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    );
  }

  return (
    <div>
      <nav className='m-0 p-3 h-12  bg-zinc-900 '>
        <ul className='list-none flex flex-row justify-around items-center'>
          <li>
            <img src='../../' alt='bug' height={100} />
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
    </div>
  );
}

export default Navigation;
