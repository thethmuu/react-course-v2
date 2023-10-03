'use client';

export default function Error({ error, reset }) {
  return (
    <div className='text-center mt-6'>
      <p>Error!</p>
      <button onClick={() => reset()}>Try again!</button>
    </div>
  );
}
