'use client';

import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { Button } from './ui/button';
import { TrashIcon } from 'lucide-react';

export default function ImageUpload({ value, onChange, onRemove }) {
  function onUpload(result) {
    onChange(result.info.secure_url);
  }

  return (
    <section>
      <ul>
        {value.map((url) => (
          <li className='relative w-[220px] aspect-square rounded-md' key={url}>
            <Button
              type='button'
              onClick={() => onRemove(url)}
              variant='destrutive'
              className='absolute z-10 top-1 right-1'
            >
              <TrashIcon />
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
            <button className='button' onClick={handleOnClick}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </section>
  );
}
