async function getProduct(id) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?apikey=${process.env.NEXT_PUBLIC_API_KEY}&select=id,name,price,imageUrl,description,size: sizeId(id,name),color: colorId(id,name),category:categoryId(id,name)&id=eq.${id}`;

  const res = await fetch(URL, { cache: 'no-cache' });

  return res.json();
}

export default getProduct;
