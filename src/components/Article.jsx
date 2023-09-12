import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import useArticle from '../hooks/useArticle';
import Spinner from './Spinner';

const Article = () => {
  const { teamId, articleId } = useParams();
  const navigate = useNavigate();

  const { response: article, loading } = useArticle({ teamId, articleId });

  if (loading) return <Spinner />;

  // if (article === null) return <Navigate to={`/${teamId}/articles`} />;

  if (article === null) {
    navigate(`/${teamId}/articles`);
  }

  return (
    <section className='grow'>
      <article>
        <h1 className='mt-4 header-md'>{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </section>
  );
};

export default Article;
