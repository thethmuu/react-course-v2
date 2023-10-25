// export const dynamic = 'force-dynamic';

import getProducts from '@/actions/getProducts';
import DeleteButton from '@/components/products/delete-button';
import UpdateButton from '@/components/products/update-button';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TrashIcon } from 'lucide-react';
import Image from 'next/image';

export default async function Products() {
  const products = await getProducts();

  console.log(products);

  return (
    <section>
      <div className='container mx-auto max-w-3xl py-6'>
        <h1 className='text-center'>Products</h1>

        <Table className='mt-4'>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead className='w-[100px]'>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Color</TableHead>
              <TableHead className='text-center' colspan='2'>
                Actions
              </TableHead>
              {/* <TableHead className='text-right'>Description</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  {product.imageUrl ? (
                    <Image
                      width={84}
                      height={84}
                      alt={product.name}
                      src={product.imageUrl}
                    />
                  ) : null}
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell className='font-medium'>
                  {product.price ? product.price : ''}
                </TableCell>
                <TableCell>{product.category?.name}</TableCell>
                <TableHead>{product.size?.name}</TableHead>
                <TableHead>{product.color?.name}</TableHead>
                <TableHead>
                  <UpdateButton id={product.id} />
                </TableHead>
                <TableHead>
                  <DeleteButton id={product.id} />
                </TableHead>
                {/* <TableCell className='text-right'>$250.00</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
