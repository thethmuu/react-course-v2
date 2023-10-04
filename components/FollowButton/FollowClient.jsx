'use client';

import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function FollowClient({ isFollowing, targetUserId }) {
  const router = useRouter();
  const [isFetching, setIsFetchign] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isMutating = isFetching || isPending;
  async function follow() {
    setIsFetchign(true);

    await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setIsFetchign(false);

    startTransition(() => {
      router.refresh();
    });
  }

  async function unfollow() {
    setIsFetchign(true);

    await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE',
    });

    setIsFetchign(false);

    startTransition(() => {
      router.refresh();
    });
  }

  if (isFollowing) {
    return (
      <button
        className='bg-indigo-500 hover:bg-indigo-400 px-2 py-1 rounded text-white text-sm'
        onClick={unfollow}
      >
        {isMutating ? '...' : 'Unfollow'}
      </button>
    );
  } else {
    return (
      <button
        className='bg-indigo-500 hover:bg-indigo-400 px-2 py-1 rounded text-white text-sm'
        onClick={follow}
      >
        {isMutating ? '...' : 'Follow'}
      </button>
    );
  }
}
