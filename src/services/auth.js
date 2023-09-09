export const authProvider = {
  isAuthenticated: false,
  error: null,
  async signin(crediantials) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/v1/auth/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(crediantials),
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        authProvider.isAuthenticated = true;
        authProvider.error = null;
      } else {
        localStorage.removeItem('token');
        authProvider.isAuthenticated = false;
        authProvider.error = data?.err;
      }
    } catch (error) {
      localStorage.removeItem('token');
      authProvider.isAuthenticated = false;
      authProvider.error = 'Something went wrong!';
    }
  },
  async signout() {
    localStorage.removeItem('token');
    authProvider.isAuthenticated = false;
    authProvider.error = null;
  },
  async register(crediantials) {
    try {
      await fetch(`${import.meta.env.VITE_BASE_URL}/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(crediantials),
      });
      authProvider.isAuthenticated = false;
      authProvider.error = null;
    } catch (error) {
      authProvider.isAuthenticated = false;
      authProvider.error = 'Something went wrong!';
    }
  },
};
