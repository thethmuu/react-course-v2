import {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
  useMemo,
} from 'react';
import axios from 'axios';

import InputWithLabel from './components/InputWithLabel';
import ArticleList from './components/ArticleList';

import useStorageState from './hooks/useStorageState';

import './App.css';

const API_BASE = 'https://hn.algolia.com/api/v1';
const API_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

const App = () => {
  const storiesReducer = (state, action) => {
    switch (action.type) {
      case 'STORIES_FETCH_INIT':
        return {
          ...state,
          isLoading: true,
        };
      case 'STORIES_FETCH_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isError: false,
          data: action.payload,
        };
      case 'STORIES_FETCH_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      case 'REMOVE_STORY': {
        return {
          ...state,
          data: state.data.filter(
            (story) => story.objectID !== action.payload.objectID
          ),
        };
      }
      default:
        throw new Error();
    }
  };

  const [searchTerm, setSearchTerm] = useStorageState('search', '');
  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoading: false,
    isError: false,
  });
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  // https://hn.algolia.com/api/v1/search?query=react&page=1

  const getUrl = (searchTerm) =>
    `${API_BASE}${API_SEARCH}?${PARAM_SEARCH}${searchTerm}`;

  const handleFetch = useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const result = await axios.get(url);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({
        type: 'STORIES_FETCH_FAILURE',
      });
    }
  }, [url]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveStory = useCallback((item) => {
    // setStories(newStories);
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`${API_ENDPOINT}${searchTerm}`);
  };

  return (
    <section className='container'>
      <h1 className='headline'>Hacker News</h1>

      <form onSubmit={handleSubmit}>
        <InputWithLabel
          id='search'
          value={searchTerm}
          onInputChange={handleSearch}
          isFocused
        >
          <strong>Search</strong>
        </InputWithLabel>

        <button type='submit'>Search</button>
      </form>

      <hr />

      {stories.isError ? <p>Something went wrong!</p> : null}

      {stories.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ArticleList
          list={stories.data}
          handleRemoveStory={handleRemoveStory}
        />
      )}
    </section>
  );
};

export default App;
