import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton, SignOutButton } from './buttons';
import AuthCheck from './AuthCheck';

export default function NavMenu() {
  return (
    <nav className='py-4 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/'>
          <Image src='/next.svg' width={200} height={30} alt='Social Logo' />
        </Link>

        <ul className='flex items-center justify-between max-w-3xl gap-4'>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/users'>Users</Link>
          </li>
          <li>
            <SignInButton />
          </li>
          <li>
            <AuthCheck>
              <SignOutButton />
            </AuthCheck>
          </li>
        </ul>
      </div>
    </nav>
  );
}
