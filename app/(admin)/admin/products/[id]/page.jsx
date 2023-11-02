export const dynamic = 'force-dynamic';

import ProductForm from '@/components/products/product-form';

import getCategories from '@/actions/getCategories';
import getProduct from '@/actions/getProduct';
import getSizes from '@/actions/getSizes';
import getColors from '@/actions/getColors';

export default async function ProductUpdatePage({ params }) {
  if (!params.id) {
    return null;
  }

  const categories = await getCategories();
  const sizes = await getSizes();
  const colors = await getColors();
  const product = await getProduct(params.id);

  return (
    <>
      <ProductForm
        initialData={product}
        categories={categories}
        sizes={sizes}
        colors={colors}
      />
    </>
  );
}
