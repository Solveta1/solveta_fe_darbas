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
        <nav>
          <ul>
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
      <nav>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navigation;
