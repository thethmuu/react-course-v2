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
const PARAM_PAGE = 'page=';

// https://hn.algolia.com/api/v1/search?query=react&page=1

const getUrl = (searchTerm, page) =>
  `${API_BASE}${API_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`;

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
        data:
          action.payload.page === 0
            ? action.payload.list
            : state.data.concat(action.payload.list),
        page: action.payload.page,
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

const App = () => {
  const [searchTerm, setSearchTerm] = useStorageState('search', '');
  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    page: 0,
    isLoading: false,
    isError: false,
  });
  const [url, setUrl] = useState(getUrl(searchTerm, 0));

  const handleFetch = useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });

    try {
      const result = await axios.get(url);

      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: {
          list: result.data.hits,
          page: result.data.page,
        },
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
    setUrl(getUrl(searchTerm, 0));
  };

  const handleLoadMore = () => {
    setUrl(getUrl(searchTerm, stories.page + 1));
  };

  return (
    <main>
      <nav className='navbar'>
        <div className='container'>
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

            <button
              style={{ marginLeft: '0.5rem' }}
              className='btn'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      <section className='main-content container'>
        {stories.isError ? <p>Something went wrong!</p> : null}

        <ArticleList
          list={stories.data}
          handleRemoveStory={handleRemoveStory}
        />
        {stories.isLoading ? (
          <p className='loading-text'>Loading...</p>
        ) : (
          <div className='btn-container'>
            <button className='btn' type='button' onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
