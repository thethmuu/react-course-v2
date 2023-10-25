'use client';

import Link from 'next/link';

import { Button } from '../ui/button';

export default function UpdateButton({ id }) {
  return (
    <Button variant='outline'>
      <Link href={`/admin/products/${id}`}>Update</Link>
    </Button>
  );
}
