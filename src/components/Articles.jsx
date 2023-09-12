import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import SideBar from './Sidebar';
import useTeamArticles from '../hooks/useTeamArticles';
import Spinner from './Spinner';

const Articles = () => {
  const { teamId } = useParams();

  const { response: articles, loading } = useTeamArticles(teamId);

  if (loading) return <Spinner />;

  console.log({ articles });

  return (
    <section className='py-16'>
      <div className='container flex gap-6 mx-auto'>
        <SideBar
          title='Articles'
          list={articles.map((article) => article.title)}
        />

        <Outlet />
      </div>
    </section>
  );
};

export default Articles;
