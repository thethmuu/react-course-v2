// export const dynamic = 'force-dynamic';

import getProducts from '@/actions/getProducts';
import DeleteButton from '@/components/products/delete-button';
import UpdateButton from '@/components/products/update-button';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDistance } from 'date-fns';
import { PlusCircleIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Products() {
  const products = await getProducts();

  console.log(products);

  return (
    <section>
      <div className='container mx-auto max-w-6xl py-6'>
        <div className='flex justify-end'>
          <Link href='/admin/products/create'>
            <Button size='sm'>
              <PlusCircleIcon className='w-4 h-4 mr-2' /> Add Product
            </Button>
          </Link>
        </div>

        <h1 className='text-center mt-4'>Products</h1>

        <Table className='mt-4'>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Color</TableHead>
              <TableHead className='text-center' colSpan='2'>
                Actions
              </TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  {product.imageUrl ? (
                    <figure className='relative w-12 aspect-[2.5/3] rounded shadow'>
                      <Image
                        className='object-cover'
                        fill
                        priority
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        alt={product.name}
                        src={product.imageUrl}
                      />
                    </figure>
                  ) : null}
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell className='font-medium'>
                  {product.price ? product.price : ''}
                </TableCell>
                <TableCell>{product.category?.name}</TableCell>
                <TableCell>{product.size?.name}</TableCell>
                <TableCell>{product.color?.name}</TableCell>
                <TableCell>
                  <UpdateButton id={product.id} />
                </TableCell>
                <TableCell>
                  <DeleteButton id={product.id} />
                </TableCell>
                <TableCell>
                  {formatDistance(new Date(product.created_at), new Date())} ago
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
