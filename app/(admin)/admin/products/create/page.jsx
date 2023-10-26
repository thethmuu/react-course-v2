import ProductForm from '@/components/products/product-form';

import getCategories from '@/actions/getCategories';
import getSizes from '@/actions/getSizes';
import getColors from '@/actions/getColors';

export default async function ProductCreatePage() {
  const categories = await getCategories();
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <>
      <ProductForm categories={categories} sizes={sizes} colors={colors} />
    </>
  );
}
