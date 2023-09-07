import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useTeam from '../hooks/useTeam';
import Spinner from './Spinner';

const Team = () => {
  const { teamId } = useParams();

  const { response: team, loading } = useTeam(teamId);

  if (loading)
    return (
      <div className='flex justify-center py-16 grow'>
        <Spinner />
      </div>
    );

  if (!team) return null;
  console.log(team);

  return (
    <section className='grow'>
      <h2 className='mt-4 header-md'>{team.name}</h2>

      <ul className='mt-6 space-y-2 text-xl text-center'>
        <li>
          Est. <span>{team.established}</span>
        </li>
        <li>
          Manager <span>{team.manager}</span>
        </li>
        <li>
          Coach <span>{team.coach}</span>
        </li>
      </ul>

      <div className='mt-6 text-2xl text-center'>
        <Link to={`/${teamId}`}>{team.name}'s Team Page</Link>
      </div>
    </section>
  );
};

export default Team;
