import useFetch from './useFetch';

export default function useTeamArticles(team) {
  return useFetch('/articles', 'POST', JSON.stringify({ team }));
}
