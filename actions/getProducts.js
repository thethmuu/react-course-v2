const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`;

async function getProducts() {
  const res = await fetch(URL, { cache: 'no-cache' });

  return res.json();
}

export default getProducts;
