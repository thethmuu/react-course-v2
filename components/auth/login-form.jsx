'use client';
import login from '@/actions/auth/login';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const identifier = formData.get('identifier');
    const password = formData.get('password');

    const response = await login({ identifier, password });

    // router.push('/admin');
  }

  return (
    <form className='space-y-3' onSubmit={handleSubmit}>
      <div className='flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8'>
        <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
        <div className='w-full'>
          <div>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='email'
            >
              Email
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] px-2 text-sm outline-2 placeholder:text-gray-500'
                id='identifier'
                type='text'
                name='identifier'
                placeholder='Enter your email or username'
              />
            </div>
          </div>
          <div className='mt-4'>
            <label
              className='mb-3 mt-5 block text-xs font-medium text-gray-900'
              htmlFor='password'
            >
              Password
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] px-2 text-sm outline-2 placeholder:text-gray-500'
                id='password'
                type='password'
                name='password'
                placeholder='Enter password'
                minLength={6}
              />
            </div>
          </div>
        </div>
        <button className='mt-4 w-full'>Log in</button>
        <Link className='text-gray-600' href='/'>
          back
        </Link>
      </div>
    </form>
  );
}
