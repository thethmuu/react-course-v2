'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { PlusIcon } from 'lucide-react';
import { useCartContext } from '../contexts/CartContext';
import toast from 'react-hot-toast';

export default function AddToCart({ product }) {
  const { onAdd } = useCartContext();

  const btnClasses =
    'relative flex w-full items-center justify-center rounded-full bg-blue-600 tracking-wide hover:opacity-90';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  function handleAdd() {
    onAdd(product, 1);

    toast.success('Added to Cart', { duration: 2000 });
  }

  return (
    <Button onClick={handleAdd} className={cn(btnClasses)}>
      <div className='abolute left-0 ml-4'>
        <PlusIcon className='w-5 h-5' />
      </div>
      Add To Cart
    </Button>
  );
}
