const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

async function getSizes() {
  const res = await fetch(URL);

  return res.json();
}

export default getSizes;
