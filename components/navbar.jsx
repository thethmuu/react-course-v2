'use client';

import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import NavLinks from './nav-links';
import CartAction from './cart-action';
import getCategories from '@/actions/getCategories';
import SearchForm from './search-form';

export default function Navbar() {
  const {
    data: categories,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return (
    <header className='border-b'>
      <div className='container mx-auto px-4 lg:px-8 flex items-center justify-between h-14'>
        <div className='flex items-center'>
          <Link href='/' className='text-xl font-bold'>
            Hub.
          </Link>
          {isPending ? (
            <p>loading...</p>
          ) : isError ? (
            <p>{error.message}</p>
          ) : (
            <NavLinks data={categories} />
          )}
        </div>

        <SearchForm />

        <CartAction />
      </div>
    </header>
  );
}
