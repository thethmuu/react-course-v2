import ProductForm from '@/components/products/product-form';

import getColors from '@/actions/getColors';
import getSizes from '@/actions/getSizes';
import getCategories from '@/actions/getCategories';

export default async function ProductCreatePage() {
  const sizes = await getSizes();
  const colors = await getColors();
  const categories = await getCategories();

  return (
    <>
      <ProductForm sizes={sizes} colors={colors} categories={categories} />
    </>
  );
}
