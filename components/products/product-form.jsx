'use client';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Button } from '../ui/button';
import ImageUpload from '../image-upload';

import updateProduct from '@/actions/updateProduct';

export default function ProductForm({
  initialData,
  sizes,
  colors,
  categories,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    ...(initialData && {
      defaultValues: initialData,
    }),
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

  async function onSubmit(formData) {
    try {
      setIsLoading(true);
      // update mode
      if (initialData) {
        await updateProduct(initialData.id, formData);
      } else {
        // create mode
        await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      router.refresh();
      router.push('/admin/products');
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <article className='max-w-sm mx-auto my-4'>
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
            {categories.map((item) => (
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
            {sizes.map((item) => (
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
            {colors.map((item) => (
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
          <Button disabled={isLoading} size='sm'>
            Create
          </Button>
        </div>
      </form>
    </article>
  );
}
