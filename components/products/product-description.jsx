import AddToCart from '../cart/add-to-cart';
import Prose from '../prose';
import VariantSelector from './variant-selector';

export default function ProductDescription({ product }) {
  const { id, name, category, imageUrl, price, description } = product;
  console.log(product);
  return (
    <>
      <div className='mb-6 flex flex-col border-b pb-6'>
        <h1 className='mb-5 text-5xl font-medium'>{name}</h1>
        <div className='mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white'>
          <p>
            ${price} <span className='ml-1 inline'>USD</span>
          </p>
        </div>
      </div>
      {/* <VariantSelector /> */}
      <p>{category?.name}</p>

      {description ? (
        <Prose
          className='my-6 text-sm leading-tight dark:text-white/60'
          html={description}
        />
      ) : null}

      <AddToCart product={product} />
    </>
  );
}
