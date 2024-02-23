import Cookies from 'js-cookie';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/local`;

export default async function login({ identifier, password }) {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
      cache: 'no-cache',
    });

    const data = await response.json();
    if (!response.ok && data.error)
      return { message: data.error.message, errors: null };
    if (response.ok && data.jwt) {
      Cookies.set('jwt', data.jwt);
      console.log('logged in!');
    }
  } catch (error) {
    console.log(error.message);
    return { error: 'Server error please try again later.' };
  }
}
