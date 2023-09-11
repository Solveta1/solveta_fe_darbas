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
    <div className='border border-solid border-white w-80 h-96 mr-auto ml-auto rounded-md p-5 shadow-xl'>
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
              className='w-full h-7 mt-3 mb-5'
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
        <button
          className='w-3/4 rounded-full bg-blue-400 mr-auto ml-auto p-2 text-white'
          type='submit '
        >
          Login
        </button>
      </Form>
    </div>
  );
}

export default LoginPage;
