'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const keyword = formData.get('keyword');

    router.push(`/products?keyword=${keyword}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        name='keyword'
        key={searchParams?.get('keyword')}
        defaultValue={searchParams?.get('keyword') || ''}
        placeholder='Search for products...'
        className='border px-3 py-1 mt-1 rounded-md outline-none w-96 max-w-full focus:ring ring-blue-200 ring-offset-1'
      />
    </form>
  );
}
