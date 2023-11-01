import { ArrowRightIcon } from 'lucide-react';
import { ArrowLeftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery({ imageUrl }) {
  const btnClassName =
    'h-full px-6 hover:text-black hover:scale-110 flex items-center justify-center transition-all ease-in-out';

  return (
    <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
      <Image
        className='object-contain w-full h-full'
        src={imageUrl}
        alt='Product label'
        fill
        priority={true}
      />

      <div className='absolute bottom-[15%] flex w-full justify-center'>
        <div className='flex items-center h-11 rounded-full border border-white bg-neutal-50/80 backdrop-blur'>
          <Link className={btnClassName} scroll={false} href='#'>
            <ArrowLeftIcon className='w-5 h-5' />
          </Link>
          <Link className={btnClassName} scroll={false} href='#'>
            <ArrowRightIcon className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </div>
  );
}
