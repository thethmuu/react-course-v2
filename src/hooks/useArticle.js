import useFetch from './useFetch';

export default function useArticle(params) {
  return useFetch(`/article`, 'POST', JSON.stringify(params));
}
