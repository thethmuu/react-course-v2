import { useEffect, useState } from 'react';

const API = 'https://api.ui.dev/hash-history-basketball-league';

export default function useFetch(path, method, body = '') {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setResponse(null);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${API}${path}`, {
      signal,
      method,
      ...(body ? { body } : {}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ body }) => (body ? JSON.parse(body) : null))
      .then((data) => {
        if (!signal.aborted) {
          setResponse(data);
          setLoading(false);
        }
      })
      .catch((error) => console.warn('Something went wrong!', error));

    // clean up
    return () => controller.abort();
  }, [path, method, body]);

  return { response, loading };
}
