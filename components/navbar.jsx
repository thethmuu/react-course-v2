'use client';
import Link from 'next/link';

import NavLinks from './nav-links';
import CartAction from './cart-action';
import SearchForm from './search-form';

import getCategories from '@/actions/getCategories';
import { useQuery } from '@tanstack/react-query';

export default function Navbar() {
  // const categories = await getCategories();
  const {
    data: categories,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error</p>;

  return (
    <header className='border-b'>
      <div className='container mx-auto px-4 lg:px-8 flex items-center justify-between h-14'>
        <div className='flex items-center'>
          <Link href='/' className='text-xl font-bold'>
            Hub.
          </Link>
          <NavLinks data={categories} />
        </div>

        <SearchForm />

        <CartAction />
      </div>
    </header>
  );
}
