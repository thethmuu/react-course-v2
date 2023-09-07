import React from 'react';
import usePlayer from '../hooks/usePlayer';
import { Link, useParams } from 'react-router-dom';

const Player = () => {
  const { playerId } = useParams();

  const { response: player, loading } = usePlayer(playerId);

  if (loading) return null;

  if (!player) return null;
  console.log(player);

  return (
    <section className='grow'>
      <img
        className='w-24 mx-auto mt-6 aspect-square'
        src={player.avatar}
        alt={`${player.name}'s avatar`}
      />
      <h2 className='mt-4 header-md'>{player.name}</h2>

      <ul className='max-w-lg mx-auto mt-6 space-y-2 text-xl'>
        <li>
          Team <Link to={`/${player.teamId}`}>{player.teamId}</Link>
        </li>
        <li>
          Position <span>{player.position}</span>
        </li>
        <li>
          PPG <span>{player.ppg}</span>
        </li>
      </ul>
    </section>
  );
};

export default Player;
