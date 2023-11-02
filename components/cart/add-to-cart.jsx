'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { PlusIcon } from 'lucide-react';
import { useCartContext } from '@/app/_contexts/CartContext';
import { useEffect } from 'react';

export default function AddToCart({ product }) {
  const { onAdd, cartItems, totalPrice } = useCartContext();

  useEffect(() => {
    console.log(cartItems, totalPrice);
  }, [cartItems, totalPrice]);

  const btnClasses =
    'relative flex w-full items-center justify-center rounded-full bg-blue-600 tracking-wide hover:opacity-90';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  return (
    <Button onClick={() => onAdd(product, 1)} className={cn(btnClasses)}>
      <div className='abolute left-0 ml-4'>
        <PlusIcon className='w-5 h-5' />
      </div>
      Add To Cart
    </Button>
  );
}
