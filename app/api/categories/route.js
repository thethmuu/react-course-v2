import { NextResponse } from 'next/server';

export async function GET() {
  const categories = [
    { id: 1, name: 'Bags', slug: 'bags' },
    { id: 2, name: 'Shoes', slug: 'shoes' },
    { id: 3, name: 'Shirts', slug: 'shirts' },
    { id: 4, name: 'Trousers', slug: 'trousers' },
  ];

  return NextResponse.json(categories);
}
