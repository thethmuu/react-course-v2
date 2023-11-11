async function getProduct(id) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}?populate=*`;

  const res = await fetch(URL, { cache: 'no-cache' });

  return res.json();
}

export default getProduct;
