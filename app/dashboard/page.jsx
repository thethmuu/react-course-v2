import React from 'react';
import UserProfile from './UserProfile';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default function UserDashboard() {
  const res = getServerSession(authOptions);

  console.log({ res });

  return (
    <section>
      <div className='container mx-auto'>
        <UserProfile />
      </div>
    </section>
  );
}
