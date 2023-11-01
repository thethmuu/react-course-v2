import HeroCover from '@/components/hero-cover';
import ProductList from '@/components/product-list';

export default function Home() {
  return (
    <main>
      <HeroCover />
      <ProductList title='Latest Arrivals' />
    </main>
  );
}
