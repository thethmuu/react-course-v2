async function createProduct(data) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

  data = {
    ...data,
    category: {
      connect: [data.categoryId],
    },
    size: {
      connect: [data.sizeId],
    },
    color: {
      connect: [data.colorId],
    },
  };

  const res = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res;
}

export default createProduct;
