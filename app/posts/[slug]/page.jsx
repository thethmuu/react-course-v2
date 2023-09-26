import React from 'react';
// export const revalidate = 60;

export default async function PostDetail({ params }) {
  const posts = await fetch('http://localhost:3000/api/posts').then((res) =>
    res.json()
  );

  const post = posts.find((item) => item.slug === params.slug);

  console.log({ post });

  return (
    <section>
      <article className='max-w-3xl mx-auto border rounded mt-6 p-4'>
        <h3 className='font-semibold text-xl'>{post.title}</h3>
        <p className='mt-2'>{post.body}</p>
      </article>
    </section>
  );
}
