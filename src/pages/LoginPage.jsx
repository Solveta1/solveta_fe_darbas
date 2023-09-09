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
    <div>
      <p>Login page</p>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
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
            Password:
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
        <button type='submit'>Login</button>
      </Form>
    </div>
  );
}

export default LoginPage;
