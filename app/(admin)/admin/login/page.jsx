import LoginForm from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <main className='flex items-center justify-center md:h-screen'>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <div className='flex h-20 w-full justify-center items-center rounded-lg bg-blue-500 p-3 md:h-20'>
          <h2 className='text-xl text-white'>Hub. Store</h2>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
