import Link from 'next/link';

import NavLinks from './nav-links';
import CartAction from './cart-action';
import getCategories from '@/actions/getCategories';

export default async function Navbar() {
  const categories = [
    { id: 1, name: 'Bags', slug: 'bags' },
    { id: 2, name: 'Shoes', slug: 'shoes' },
    { id: 3, name: 'Shirts', slug: 'shirts' },
    { id: 4, name: 'Trousers', slug: 'trousers' },
  ];

  return (
    <header className='border-b'>
      <div className='container mx-auto px-4 lg:px-8 flex items-center justify-between h-14'>
        <div className='flex items-center'>
          <Link href='/' className='text-xl font-bold'>
            Hub.
          </Link>
          <NavLinks data={categories} />
        </div>

        <CartAction />
      </div>
    </header>
  );
}
