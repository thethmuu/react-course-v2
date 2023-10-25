'use client';

import { Controller, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import ImageUpload from '../image-upload';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import updateProduct from '@/actions/updateProduct';

export default function ProductForm({ initialData }) {
  console.log(initialData);
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
        console.log('formData', formData)
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

      // await axios.post(URL, formData)

      router.refresh();
      router.push('/admin/products');
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
            <option value='1'>Shoes</option>
            <option value='2'>Bags</option>
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
            <option value='1'>SM</option>
            <option value='2'>MD</option>
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
            <option value='1'>Red</option>
            <option value='2'>Black</option>
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
