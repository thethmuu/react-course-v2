import { Button } from '../ui/button';

export default function VariantSelector() {
  return (
    <dl className='mb-8'>
      <dt className='mb-4 text-sm uppercase tracking-wide'>SIZES</dt>
      <dd className='flex flex-wrap gap-3'>
        <Button className='flex items-center justify-center rounded-full text-sm'>
          XL
        </Button>
      </dd>
    </dl>
  );
}
