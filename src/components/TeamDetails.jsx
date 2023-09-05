import { useParams } from 'react-router';

const TeamDetails = () => {
  const { teamId } = useParams();

  return <div>TeamDetails Page for {teamId}</div>;
};

export default TeamDetails;
