import { Form } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <p>Login page</p>
      <Form method='post'>
        <div>
          <label>
            Email: <input type='email' name='username' />
          </label>
        </div>
        <div>
          <label>
            Password: <input type='password' name='password' />
          </label>
        </div>
        <button type='submit'>Login</button>
      </Form>
    </div>
  );
}

export default LoginPage;
