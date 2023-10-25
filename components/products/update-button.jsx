'use client';

import Link from 'next/link';

import { Button } from '../ui/button';
import { FileEditIcon } from 'lucide-react';

export default function UpdateButton({ id }) {
  return (
    <Button variant='outline'>
      <Link href={`/admin/products/${id}`}>
        <FileEditIcon className='w-4 h-4' />
      </Link>
    </Button>
  );
}
