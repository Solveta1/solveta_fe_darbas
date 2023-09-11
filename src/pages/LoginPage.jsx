import { Form, useNavigate } from 'react-router-dom';
import { authProvider } from '../services/auth';
import { useState } from 'react';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await authProvider.signin(formData);
    setFormError(authProvider.error);
    if (authProvider.isAuthenticated) {
      navigate('/');
    }
  };

  return (
    <div className='bgImage bg-cover bg-fixed h-screen flex justify-center items-center'>
      <div className=' bg-white border border-solid border-white w-80 h-96 mr-auto ml-auto rounded-md p-5 shadow-xl'>
        <h2 className='text-center text-2xl'>Login</h2>
        <Form onSubmit={handleSubmit}>
          <div>
            <label>
              Email
              <input
                className='w-full mb-5 h-7 mt-3'
                placeholder='type your email'
                type='email'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                className='w-full h-7 mt-3 mb-10'
                placeholder='type your password'
                type='password'
                name='password'
                required
                minLength='6'
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <p>{formError}</p>
          </div>
          <div className='flex items-center'>
            <button
              className='w-2/4 rounded-3xl bg-blue-400 mr-auto ml-auto p-2 text-white'
              type='submit '
            >
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
