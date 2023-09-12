import { useRoutes } from 'react-router-dom';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./Home'));
const Players = React.lazy(() => import('./Players'));
const Articles = React.lazy(() => import('./Articles'));
const Teams = React.lazy(() => import('./Teams'));
import Player from './Player';
import TeamDetails from './TeamDetails';
import Team from './Team';
import Article from './Article';
import Spinner from './Spinner';

import Navbar from './Navbar';

// Suspense

function Routes() {
  return useRoutes([
    { path: '/', element: <Home /> },
    {
      path: '/players',
      element: <Players />,
      children: [
        { path: ':playerId', element: <Player /> },
        {
          path: '',
          element: (
            <section className='py-16 text-center grow'>
              Choose a player
            </section>
          ),
        },
      ],
    },
    {
      path: '/teams',
      element: <Teams />,
      children: [
        { path: ':teamId', element: <Team /> },
        {
          path: '',
          element: (
            <section className='py-16 text-center grow'>Choose a team</section>
          ),
        },
      ],
    },
    {
      path: '/:teamId',
      element: <TeamDetails />,
    },
    {
      path: '/:teamId/articles',
      element: <Articles />,
      children: [
        { path: ':articleId', element: <Article /> },
        {
          path: '',
          element: (
            <section className='py-16 text-center grow'>
              Choose an article
            </section>
          ),
        },
      ],
    },
  ]);
}

function App() {
  return (
    <main>
      <Navbar />

      <Suspense fallback={<Spinner />}>
        <Routes />
      </Suspense>
    </main>
  );
}

export default App;
