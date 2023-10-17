import Link from 'next/link';

import NavLinks from './nav-links';
import CartAction from './cart-action';
import getCategories from '@/actions/getCategories';

export default async function Navbar() {
  // const categories = await getCategories();
  const categories = [];

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
