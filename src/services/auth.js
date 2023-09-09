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
      if (data.status === 200) {
        authProvider.isAuthenticated = true;
        authProvider.error = null;
      } else {
        authProvider.isAuthenticated = false;
        authProvider.error = data?.err;
      }
    } catch (error) {
      authProvider.isAuthenticated = false;
      authProvider.error = 'Something went wrong!';
    }
  },
  async signout() {
    console.log('signout');
    authProvider.isAuthenticated = false;
    authProvider.error = null;
  },
};
