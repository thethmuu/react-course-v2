import getProduct from '@/actions/getProduct';
import ProductForm from '@/components/products/product-form';

export default async function ProductUpdatePage({ params }) {
  if (!params.id) {
    return null;
  }

  const result = await getProduct(params.id);
  const product = result[0];

  return (
    <div>
      <ProductForm initialData={product} />
    </div>
  );
}
