import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import UserProfile from './UserProfile';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function UserDashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  console.log({ session });

  return (
    <section>
      <div className='container mx-auto'>
        <UserProfile />
      </div>
    </section>
  );
}
