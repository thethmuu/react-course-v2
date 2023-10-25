async function updateProduct(id, data) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?apikey=${process.env.NEXT_PUBLIC_API_KEY}&id=eq.${id}`;

  const res = await fetch(URL, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}

export default updateProduct;
