import { Outlet } from 'react-router-dom';
import useTeamNames from '../hooks/useTeamNames';
import SideBar from './Sidebar';

const Teams = () => {
  const { response: teamNames, loading } = useTeamNames();

  if (loading) return null;

  return (
    <section className='py-16'>
      <div className='container flex gap-6 mx-auto'>
        <SideBar title='Teams' list={teamNames} />

        <Outlet />
      </div>
    </section>
  );
};

export default Teams;
