'use client';

import { useQuery } from '@tanstack/react-query';
import ProductCard from './product-card';
import getProducts from '@/actions/getProducts';

export default function ProductList({ title }) {
  const {
    data: products,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  console.log(products);

  return (
    <section>
      <div className='container mx-auto px-4 lg:px-8 py-6'>
        <h3 className='font-semibold text-xl text-center'>{title}</h3>
        <div className='flex flex-wrap gap-6 justify-center mt-6'>
          {isPending ? (
            <p>loading...</p>
          ) : isError ? (
            <p>{error.message}</p>
          ) : (
            <>
              {products.data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
