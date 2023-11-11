const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

async function getCategories() {
  const res = await fetch(URL);

  return res.json();
}

export default getCategories;
