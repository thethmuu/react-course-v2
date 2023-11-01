async function getProduct(id) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?apikey=${process.env.NEXT_PUBLIC_API_KEY}&id=eq.${id}`;

  const res = await fetch(URL, { cache: 'no-cache' });

  const data = await res.json();

  return data[0];
}

export default getProduct;
