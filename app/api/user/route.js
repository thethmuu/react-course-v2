import { prisma } from '@/lib/prisma';
import { authOptions } from '../auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function PUT(req) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email;

  // request data from client
  const data = await req.json();
  // data.age = Number(data.age);

  const user = await prisma.user.update({
    where: {
      email: currentUserEmail,
    },
    data,
  });

  return NextResponse.json(user);
}
