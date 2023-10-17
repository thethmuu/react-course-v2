import ProductCard from './product-card';

export default function ProductList() {
  return (
    <section>
      <h3 className='font-semibold text-xl text-center'>Latest Arrivals</h3>
      <div className='container mx-auto px-4 mt-4'>
        <ProductCard />
      </div>
    </section>
  );
}
