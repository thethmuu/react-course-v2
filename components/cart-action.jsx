'use client';

import { ShoppingCart } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import useHasMounted from '@/hooks/useHasMounted';
import { useCartContext } from './contexts/CartContext';
import { ShoppingBag } from 'lucide-react';
import { MinusCircle } from 'lucide-react';
import { PlusCircle } from 'lucide-react';
import { Button } from './ui/button';

export default function CartAction() {
  const { totalQty, totalPrice, cartItems, onAdd, onRemove } = useCartContext();

  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  async function handleCheckout() {
    const res = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });
    const data = res.json();
    // stripe checkout here
  }

  return (
    <div className='flex items-center gap-4'>
      <Sheet>
        <SheetTrigger className='rounded flex items-center gap-2 p-2 relative border'>
          <ShoppingCart className='w-4 h-4' color='black' />
          <span className='absolute -top-2 -right-2 text-xs w-4 h-4 flex items-center justify-center bg-blue-500 text-white rounded'>
            {totalQty}
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>My Cart</SheetTitle>
            <SheetDescription className='flex flex-col'>
              {cartItems.length < 1 ? (
                <p>
                  <ShoppingBag className='w-6 h-6' /> Do some shopping
                </p>
              ) : (
                <ul className='space-y-2'>
                  {cartItems.map((item) => (
                    <li key={item.id} className='border-b p-2'>
                      <div className='flex items-center gap-4'>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                      </div>
                      <div className='flex justify-between items-center'>
                        <p>Quantity</p>
                        <button onClick={() => onRemove(item)}>
                          <MinusCircle />
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onAdd(item, 1)}>
                          <PlusCircle />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className='space-y-2'>
                <p>Total ${totalPrice}</p>
                <Button onClick={handleCheckout}>Procced to Checkout</Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
