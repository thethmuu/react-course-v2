import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <main>
      <Navbar />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/players' element={<Players />}>
            <Route path=':playerId' element={<Player />} />
            <Route
              path=''
              element={
                <section className='py-16 text-center grow'>
                  Choose a player
                </section>
              }
            />
          </Route>
          <Route path='/teams' element={<Teams />}>
            <Route path=':teamId' element={<Team />} />
            <Route
              path=''
              element={
                <section className='py-16 text-center grow'>
                  Choose a team
                </section>
              }
            />
          </Route>
          <Route path='/:teamId' element={<TeamDetails />} />
          <Route path='/:teamId/articles' element={<Articles />}>
            <Route path=':articleId' element={<Article />} />
            <Route
              path=''
              element={
                <section className='py-16 text-center grow'>
                  Choose an article
                </section>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
