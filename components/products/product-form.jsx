'use client';

import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';

export default function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <article className='max-w-sm mx-auto mt-4'>
      <h1 className='text-2xl font-semibold'>Create New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-3 space-y-3'>
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
          <Button size='sm'>Create</Button>
        </div>
      </form>
    </article>
  );
}
