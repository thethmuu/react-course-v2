import qs from 'qs';
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

async function getProducts(params = {}) {
  params = qs.stringify({
    populate: '*',
    ...params,
  });

  const res = await fetch(URL + '?' + params, {
    cache: 'no-cache',
  });

  return res.json();
}

export default getProducts;
