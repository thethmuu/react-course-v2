import { ShoppingBag } from 'lucide-react';

import { Button } from './ui/button';

export default function CartAction() {
  return (
    <div className='flex items-center gap-4'>
      <Button className='rounded-3xl flex items-center gap-1'>
        <ShoppingBag size={18} color='white' />
        <span>0</span>
      </Button>
    </div>
  );
}
