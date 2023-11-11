async function deleteProduct(id) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;

  const res = await fetch(URL, {
    method: 'DELETE',
  });

  return res;
}

export default deleteProduct;
