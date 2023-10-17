export default function HeroCover() {
  return (
    <section className='rounded-xl overflow-hidden p-4'>
      <div className='mx-auto container px-4'>
        <div
          style={{ backgroundImage: "url('/hero-banner.avif')" }}
          className='rounded-xl bg-cover overflow-hidden h-80 lg:h-96'
        >
          <div className='w-full h-full flex items-center justify-center'>
            <p className='font-bold text-3xl sm:text-5xl lg:text-6xl drop-shadow text-white'>
              Meet the New You
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
