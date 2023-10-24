'use client';

import { TrashIcon, ImagePlusIcon } from 'lucide-react';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';

import { Button } from './ui/button';

import useHasMounted from '@/hooks/useHasMounted';

export default function ImageUpload({ disabled, onChange, onRemove, value }) {
  const hasMounted = useHasMounted();

  const onUpload = (result) => {
    onChange(result.info.secure_url);
  };

  if (!hasMounted) return null;

  return (
    <section>
      <ul className='mb-4 flex items-center gap-4'>
        {value.map((url) => (
          <li
            key={url}
            className='relative w-[200px] aspect-square rouned-md overflow-hidden'
          >
            <Button
              type='button'
              onClick={() => onRemove(url)}
              className='z-10 absolute top-2 right-2'
              variant='destrutive'
              size='icon'
            >
              <TrashIcon className='h-4' />
            </Button>
            <Image
              fill
              className='object-cover'
              alt='Image to upload'
              src={url}
            />
          </li>
        ))}
      </ul>
      <CldUploadWidget onUpload={onUpload} uploadPreset='l3iak0ml'>
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type='button'
              onClick={onClick}
              variant='secondary'
              disabled={disabled}
            >
              <ImagePlusIcon />
            </Button>
          );
        }}
      </CldUploadWidget>
    </section>
  );
}
