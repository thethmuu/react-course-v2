import ProductForm from '@/components/products/product-form';

import getProduct from '@/actions/getProduct';
import getColors from '@/actions/getColors';
import getSizes from '@/actions/getSizes';
import getCategories from '@/actions/getCategories';

export default async function ProductUpdatePage({ params }) {
  if (!params.id) {
    return null;
  }

  const sizes = await getSizes();
  const colors = await getColors();
  const categories = await getCategories();
  const result = await getProduct(params.id);
  const product = result[0];

  return (
    <>
      <ProductForm
        initialData={product}
        sizes={sizes}
        colors={colors}
        categories={categories}
      />
    </>
  );
}
