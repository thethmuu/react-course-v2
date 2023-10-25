'use client';

import { TrashIcon } from 'lucide-react';
import { Button } from '../ui/button';
import deleteProduct from '@/actions/deleteProduct';
import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }) {
  const router = useRouter();

  async function handleDelete(id) {
    const isConfirmed = confirm('Sure to delete?');
    if (isConfirmed) {
      try {
        await deleteProduct(id);
        router.refresh();
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  return (
    <Button onClick={() => handleDelete(id)} variant='destructive' size='icon'>
      <TrashIcon className='w-4 h-4' />
    </Button>
  );
}
