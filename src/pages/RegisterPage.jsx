import { Form } from 'react-router-dom';
import { authProvider } from '../services/auth';
import { useState } from 'react';

function RegisterPage() {
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
    await authProvider.register(formData);
    setFormError(authProvider.error);
  };

  return (
    <div className='border border-solid border-white w-80 h-96 mr-auto ml-auto rounded-md p-5 shadow-xl'>
      <h2 className='text-center text-2xl'>Register</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              className='w-full mb-5 h-7 mt-3'
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
          type='submit'
        >
          Register
        </button>
        <p className='text-base text-center'>
          Already have an account?{' '}
          <a href='http://localhost:5173/login'>Login in</a>
        </p>
      </Form>
    </div>
  );
}

export default RegisterPage;
