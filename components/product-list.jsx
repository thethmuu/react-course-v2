'use client';
import { useQuery } from '@tanstack/react-query';
import ProductCard from './product-card';
import getProducts from '@/actions/getProducts';

export default function ProductList() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <section className='my-6'>
      <div className='container mx-auto px-4 lg:px-8'>
        <h3 className='font-semibold text-xl text-center'>Latest Arrivals</h3>
        <div className='px-4 mt-4 flex flex-wrap gap-6 justify-center'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
