'use client';

import getProduct from '@/actions/getProduct';
import Gallery from '@/components/products/gallery';
import ProductDescription from '@/components/products/product-description';
import { useQuery } from '@tanstack/react-query';
import { notFound, useParams } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams();

  const {
    data: product,
    isError,
    isPending,
    isFetched,
    error,
  } = useQuery({
    queryKey: [`product/${id}`],
    queryFn: () => getProduct(id),
  });

  if (!product && isFetched) {
    notFound();
  }

  if (isPending) return <p>loading...</p>;
  if (isError) return <p>{error.message}</p>;

  const { name, category, imageUrl, price } = product;

  return (
    <section>
      <div className='container mx-auto px-4 lg:px-0 my-6'>
        <div className='flex flex-col rounded-lg border border-neutral-200 p-8 lg:flex-row lg:gap-8'>
          <div className='h-full w-full basis-full lg:basis-4/6'>
            <Gallery imageUrl={imageUrl} />
          </div>
          <div className='basis-full lg:basis-2/6'>
            <ProductDescription product={product} />
          </div>
        </div>
      </div>

      {/* Related products */}
    </section>
  );
}
