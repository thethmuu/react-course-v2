import { Link } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';

const Home = () => {
  const { response: teamNames, loading } = useTeamNames();

  if (loading) return null;

  return (
    <section className='py-16'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-semibold text-center'>
          Basketball League
        </h1>

        <h3 className='mt-6 text-2xl text-center'>Choose your team</h3>

        <div className='flex flex-wrap justify-center max-w-5xl mx-auto mt-4 gap-4'>
          {teamNames
            ? teamNames.map((item) => (
                <Link key={item} to={`/${item}`}>
                  <article className='bg-slate-500 hover:bg-slate-600 py-2 px-4 w-72 rounded-lg'>
                    <p className='text-center'>{item}</p>
                  </article>
                </Link>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default Home;
