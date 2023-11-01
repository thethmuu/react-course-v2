'use client';

import Link from 'next/link';

import { Button } from '../ui/button';
import { FileEditIcon } from 'lucide-react';

export default function UpdateButton({ id }) {
  return (
    <Link href={`/admin/products/${id}`}>
      <Button variant='outline' size='icon'>
        <FileEditIcon className='w-4 h-4' />
      </Button>
    </Link>
  );
}
