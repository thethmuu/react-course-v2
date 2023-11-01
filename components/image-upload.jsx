'use client';

import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { Button } from './ui/button';

import { UploadCloudIcon } from 'lucide-react';
import { XCircleIcon } from 'lucide-react';

export default function ImageUpload({ value, onChange, onRemove }) {
  function onUpload(result) {
    onChange(result.info.secure_url);
  }

  return (
    <section className='mt-1'>
      <ul>
        {value.map((url) => (
          <li className='relative w-[220px] aspect-square rounded-md' key={url}>
            <Button
              type='button'
              onClick={() => onRemove(url)}
              size='icon'
              variant='destructive'
              className='absolute z-10 -top-2 -right-2 rounded-full border border-white shadow'
            >
              <XCircleIcon className='w-4 h-4' />
            </Button>
            <Image
              className='object-cover'
              alt='Product image'
              fill
              src={url}
            />
          </li>
        ))}
      </ul>
      <CldUploadWidget onUpload={onUpload} uploadPreset='hmttejbk'>
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <Button
              className='button mt-2'
              variant='outline'
              onClick={handleOnClick}
            >
              <UploadCloudIcon className='w-4 h-4 mr-1' /> Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </section>
  );
}
