'use client';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton';
import { Button } from './ui/button';
import { Expand } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProductCard() {
  const router = useRouter();

  function handleClick() {
    router.push('/products/polo-tee');
  }

  return (
    <article
      onClick={handleClick}
      className='max-w-md group space-y-3 text-center cursor-pointer'
    >
      <div className='aspect-square rounded-xl relative'>
        <Image
          src='https://picsum.photos/400/600'
          alt='Product label'
          fill
          className='object-cover aspect-square rounded-md'
        />
        <div className='absolute bottom-5 flex items-center justify-center w-full opacity-0 group-hover:opacity-100 gap-2'>
          <Button variant='secondary'>
            <Expand size={18} className='text-gray-600' />
          </Button>
          <Button variant='secondary'>
            <ShoppingCart size={18} className='text-gray-600' />
          </Button>
        </div>
      </div>

      <div>
        <p>Polo tee</p>
        <p>Shirt</p>
      </div>

      <div>
        <p>$30</p>
      </div>
    </article>
  );
}
