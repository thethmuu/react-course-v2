'use client';

import { Controller, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import ImageUpload from '../image-upload';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import updateProduct from '@/actions/updateProduct';
import { Loader2 } from 'lucide-react';
import createProduct from '@/actions/createProduct';

export default function ProductForm({
  initialData,
  categories,
  sizes,
  colors,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    ...(initialData && {
      defaultValues: {
        ...initialData,
        categoryId: initialData.category.id,
        sizeId: initialData.size.id,
        colorId: initialData.color.id,
      },
    }),
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isMutating = isLoading || isPending;

  async function onSubmit(formData) {
    try {
      setIsLoading(true);

      let res;
      // update mode
      if (initialData) {
        res = await updateProduct(initialData.id, formData);
      } else {
        // create mode
        res = await createProduct(formData);
      }

      if (res.ok) {
        startTransition(() => {
          router.refresh();
        });
        router.push('/admin/products');
      } else {
        throw new Error('Saving failed');
      }
    } catch (error) {
      console.log('Something went wrong!');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <article className='max-w-sm mx-auto mt-4'>
      <h1 className='text-2xl font-semibold'>
        {initialData ? 'Update product' : 'Create New Product'}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-3 space-y-3'>
        <div>
          <label htmlFor='image'>Image</label>
          <Controller
            name='imageUrl'
            control={control}
            render={({ field: { value, onChange } }) => (
              <ImageUpload
                value={value ? [value] : []}
                onChange={(url) => onChange(url)}
                onRemove={() => onChange('')}
              />
            )}
          />
        </div>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            {...register('name', { required: true })}
            className='w-full border px-2 py-1 mt-1 rounded'
            type='text'
            id='name'
          />
          {errors.name && (
            <small className='mt-1 text-red-500'>Name is required</small>
          )}
        </div>

        <div>
          <label htmlFor='price'>Price</label>
          <input
            {...register('price', { required: true })}
            className='w-full border px-2 py-1 mt-1 rounded'
            type='number'
            id='price'
          />
          {errors.price && (
            <small className='mt-1 text-red-500'>Price is required</small>
          )}
        </div>

        <div>
          <label htmlFor='category'>Category</label>
          <select
            {...register('categoryId', { required: true })}
            className='w-full border px-2 py-1 mt-1 rounded'
            id='category'
          >
            <option value=''>Select category</option>
            {categories.data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          {errors.categoryId && (
            <small className='mt-1 text-red-500'>Category is required</small>
          )}
        </div>

        <div>
          <label htmlFor='sizeId'>Size</label>
          <select
            {...register('sizeId', { required: true })}
            className='w-full border px-2 py-1 mt-1 rounded'
            id='sizeId'
          >
            {sizes.data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='color'>Color</label>
          <select
            {...register('colorId', { required: true })}
            className='w-full border px-2 py-1 mt-1 rounded'
            type='text'
            id='color'
          >
            {colors.data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            {...register('description')}
            className='w-full border px-2 py-1 mt-1 rounded'
            id='description'
            rows='5'
          ></textarea>
        </div>

        <div className='flex justify-end'>
          <Button disabled={isMutating} size='sm'>
            {initialData ? 'Update' : 'Create'}

            {isMutating ? (
              <Loader2 className='w-4 h-4 ml-2 animate-spin' />
            ) : null}
          </Button>
        </div>
      </form>
    </article>
  );
}
