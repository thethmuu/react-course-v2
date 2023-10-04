import FollowButton from '@/components/FollowButton/FollowButton';
import { prisma } from '@/lib/prisma';

export default async function UserDetails({ params }) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  const { id, name, age, bio, image } = user ?? {};

  return (
    <div className='max-w-md mx-auto p-3 text-center'>
      <h2>{name}</h2>
      <img className='w-24 mx-auto aspect-square' src={image} alt={name} />
      <h3>{bio}</h3>
      <p>{age}</p>

      <FollowButton targetUserId={id} />
    </div>
  );
}
