'use client';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton';
import { Button } from './ui/button';
import { Expand } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useCartContext } from './contexts/CartContext';
import toast from 'react-hot-toast';

export default function ProductCard({ product }) {
  const { id, name, category, imageUrl, price } = product;
  const { onAdd } = useCartContext();

  const router = useRouter();

  function handleClick() {
    router.push(`/products/${id}`);
  }

  function handleAdd() {
    onAdd(product, 1);

    toast.success('Added to Cart', { duration: 2000 });
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
        <BlurImage imageUrl={imageUrl} name={name} />
        <div
          onClick={preventEventBubbling}
          className='absolute bottom-5 flex items-center justify-center w-full opacity-0 group-hover:opacity-100 gap-2'
        >
          <Button onClick={handleAdd} variant='secondary'>
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

function BlurImage({ imageUrl, name = '' }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={imageUrl}
      alt={name}
      fill
      className={cn(
        'object-cover aspect-square rounded-md duration-500 ease-in-out',
        isLoading
          ? 'scale-110 blur-2xl grayscale'
          : 'scale-100 blur-0 grayscale-0'
      )}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
}
