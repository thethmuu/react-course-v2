import { useParams } from 'react-router';
import useTeamNames from '../hooks/useTeamNames';
import useTeamArticles from '../hooks/useTeamArticles';
import useTeam from '../hooks/useTeam';
import { Link } from 'react-router-dom';
import { slugify } from '../utils';

function useTeamPageData(teamId) {
  const { response: teamNames, loading: teamNamesLoading } = useTeamNames();

  const { response: articles, loading: teamArticlesLoading } =
    useTeamArticles(teamId);

  const { response: team, loading: teamLoading } = useTeam(teamId);

  return {
    teamNames,
    articles,
    team,
    loading: teamNamesLoading || teamArticlesLoading || teamLoading,
  };
}

const TeamDetails = () => {
  const { teamId } = useParams();
  const { teamNames, articles, team, loading } = useTeamPageData(teamId);

  if (loading) return <p className='py-8 text-center'>Loading...</p>;

  if (!teamNames?.includes(teamId)) {
    return <p className='py-8 text-center'>The {teamId} does not exist!</p>;
  }

  return (
    <section className='py-16'>
      <div className='container mx-auto text-center'>
        <h1 className='header'>{team?.name}</h1>

        <h4 className='mt-6 text-2xl text-center'>
          <Link to={{ pathname: '/players', search: `?teamId=${teamId}` }}>
            View Players
          </Link>
        </h4>

        <h4 className='mt-6 header-md'>Championships</h4>
        <ul className='flex justify-center gap-4 mt-4'>
          {team?.championships.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {team ? (
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
        ) : null}

        <h2 className='mt-6 text-xl text-center'>Blog Articles</h2>
        <ul className='mt-4 space-y-2'>
          {articles?.map((item) => (
            <li key={item.id}>
              <Link to={`articles/${slugify(item.title)}`}>{item.title}</Link>
              <p>{new Date(item.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamDetails;
