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
    <div>
      <p>Register page</p>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:{' '}
            <input
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
            Password:{' '}
            <input
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
        <button type='submit'>Register</button>
      </Form>
    </div>
  );
}

export default RegisterPage;
