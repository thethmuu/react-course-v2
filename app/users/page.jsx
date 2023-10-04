import UserCard from '@/components/UserCard';
import { prisma } from '@/lib/prisma';

export default async function Users() {
  const users = await prisma.user.findMany();

  return (
    <section>
      <h2 className='text-center font-semibold text-xl mt-4'>Users</h2>
      <div className='container mx-auto flex flex-wrap justify-center mt-3 gap-6'>
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </section>
  );
}
