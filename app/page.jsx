// ISR
export const dynamic = 'force-static';
export const revalidate = 360;

import AuthCheck from '@/components/AuthCheck';
import Toggle from '@/components/Toggle';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = await fetch('http://localhost:3000/api/posts').then((res) =>
    res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Home() {
  const posts = await fetch('http://localhost:3000/api/posts').then((res) =>
    res.json()
  );

  return (
    <main>
      <section>
        <div className='container mx-auto'>
          <h2 className='text-center font-semibold text-xl mt-4'>Newsfeed</h2>

          <ul className='max-w-3xl mx-auto space-y-4 mt-4'>
            {posts.map((post) => (
              <article
                className='text-center border rounded shadow p-2'
                key={post.slug}
              >
                <Link href={`/posts/${post.slug}`}>
                  <h3>{post.title}</h3>
                </Link>
              </article>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
