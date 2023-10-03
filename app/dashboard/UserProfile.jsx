'use client';

import { useSession } from 'next-auth/react';

export default function UserProfile() {
  const { data: session, status } = useSession();
  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
    };

    console.log(body);

    // const res = await fetch('/api/user', {
    //   method: 'PUT',
    //   body: JSON.stringify(body),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    // await res.json();
  }

  if (status === 'loading') return null;
  const user = session.user;

  return (
    <div className='max-w-md mx-auto shadow p-3 mt-6'>
      <h2>Update your profile</h2>
      <form className='mt-3 space-y-3' onSubmit={handleSubmit}>
        <div>
          <label className='block' htmlFor='name'>
            Name
          </label>
          <input
            className='w-full border px-2 py-1'
            type='text'
            id='name'
            name='name'
            defaultValue={user?.name ?? ''}
          />
        </div>
        <div>
          <label className='block' htmlFor='bio'>
            Bio
          </label>
          <textarea
            className='w-full border px-2 py-1'
            rows={5}
            id='bio'
            name='bio'
            defaultValue={user?.bio ?? ''}
          />
        </div>

        <button type='submit'>Save</button>
      </form>
    </div>
  );
}
