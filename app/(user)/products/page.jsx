'use client';

import getCategories from '@/actions/getCategories';
import ProductList from '@/components/product-list';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function AllProductsPage() {
  const {
    data: categories,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  if (isPending) return <p>loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <section>
      <div className='container mx-auto px-4 lg:px-8 flex'>
        <aside className='border-r w-1/5 min-h-screen py-6'>
          <ul>
            {categories.map((item) => (
              <Link key={item.id} href={`/products?category=${item.slug}`}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </aside>
        <ProductList title='Our Products' />
      </div>
    </section>
  );
}
