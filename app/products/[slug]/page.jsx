import Gallery from '@/components/products/gallery';
import ProductDescription from '@/components/products/product-description';

export default function ProductPage() {
  return (
    <section>
      <div className='container mx-auto px-4 lg:px-0'>
        <div className='flex flex-col rounded-lg border border-neutral-200 p-8 lg:flex-row lg:gap-8'>
          <div className='h-full w-full basis-full lg:basis-4/6'>
            <Gallery />
          </div>
          <div className='basis-full lg:basis-2/6'>
            <ProductDescription />
          </div>
        </div>
      </div>

      {/* Related products */}
    </section>
  );
}
