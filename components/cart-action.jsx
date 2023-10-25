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

export default function CartAction() {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <div className='flex items-center gap-4'>
      <Sheet>
        <SheetTrigger className='flex items-center gap-2 border rounded p-2 relative'>
          <ShoppingCart className='w-4 h-4' color='black' />
          <span className='absolute -top-2 -right-2 text-xs w-4 h-4 rounded flex items-center justify-center bg-blue-500 text-white'>
            0
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
