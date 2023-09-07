import { Link } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';

const Home = () => {
  const { response: teamNames, loading } = useTeamNames();

  if (loading) return null;

  return (
    <section className='py-16'>
      <div className='container mx-auto'>
        <h1 className='header'>Basketball League</h1>

        <h3 className='mt-6 text-2xl text-center'>Choose your team</h3>

        <div className='flex flex-wrap justify-center max-w-5xl gap-4 mx-auto mt-4'>
          {teamNames.map((item) => (
            <Link key={item} to={`/${item}`}>
              <article className='px-4 py-2 rounded-lg bg-slate-500 hover:bg-slate-600 w-72'>
                <p className='text-center'>{item}</p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
