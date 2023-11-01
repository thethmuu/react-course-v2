'use client';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton';
import { Button } from './ui/button';
import { Expand } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ProductCard({ product }) {
  const { id, name, category, imageUrl, price } = product;

  const router = useRouter();

  function handleClick() {
    router.push(`/products/${id}`);
  }

  function preventEventBubbling(e) {
    e.stopPropagation();
  }

  return (
    <article
      onClick={handleClick}
      className='w-64 group space-y-3 text-center cursor-pointer border-neutral-900'
    >
      <div className='aspect-square rounded-xl relative'>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className='object-cover aspect-square rounded-md'
        />
        <div
          onClick={preventEventBubbling}
          className='absolute bottom-5 flex items-center justify-center w-full opacity-0 group-hover:opacity-100 gap-2'
        >
          <Button variant='secondary'>
            <ShoppingCart size={18} className='text-gray-600' />
          </Button>
        </div>
      </div>

      <div>
        <p>{name}</p>
        <p>{category?.name}</p>
      </div>

      <div>
        <p>${price}</p>
      </div>
    </article>
  );
}
