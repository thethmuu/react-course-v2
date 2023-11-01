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
  const result = await getProduct(params.id);
  const product = result[0];

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
