const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

async function getCategories() {
  const res = await fetch(URL);

  return res.json();
}

export default getCategories;
