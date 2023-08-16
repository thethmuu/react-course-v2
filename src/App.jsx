import { useEffect, useReducer, useRef, useState } from 'react';

const App = () => {
  const initialStories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
    {
      title: 'React and Next.js',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 3,
    },
  ];

  // mock API fetching
  const getAsyncStories = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ data: initialStories }), 2000)
    );

  const [searchTerm, setSearchTerm] = useStorageState('search', '');
  // const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const storiesReducer = (state, action) => {
    if (action.type === 'SET_STORIES') {
      return action.payload;
    } else if (action.type === 'REMOVE_STORY') {
      return state.filter(
        (story) => story.objectID !== action.payload.objectID
      );
    }
  };

  const [stories, dispatchStories] = useReducer(storiesReducer, []);

  useEffect(() => {
    setIsLoading(true);

    getAsyncStories()
      .then((result) => {
        // setStories(result.data);
        dispatchStories({ type: 'SET_STORIES', payload: result.data });
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchArticles = stories.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveStory = (item) => {
    // setStories(newStories);
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };

  return (
    <>
      <h1>Hacker News</h1>

      <InputWithLabel
        id='search'
        value={searchTerm}
        onInputChange={handleSearch}
        isFocused
      >
        <strong>Search</strong>
      </InputWithLabel>

      <hr />

      {isError ? <p>Something went wrong!</p> : null}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ArticleList
          list={searchArticles}
          handleRemoveStory={handleRemoveStory}
        />
      )}
    </>
  );
};

const useStorageState = (key, initialState) => {
  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

function InputWithLabel({
  id,
  value,
  onInputChange,
  type = 'text',
  children,
  isFocused,
}) {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{children} </label>
      {/* controlled component */}
      <input
        ref={inputRef}
        value={value}
        onChange={onInputChange}
        type={type}
        id={id}
      />
    </>
  );
}

function ArticleList({ list, handleRemoveStory }) {
  return (
    <ul>
      {list.map((item) => (
        <Article
          key={item.objectID}
          article={item}
          handleRemoveStory={handleRemoveStory}
        />
      ))}
    </ul>
  );
}

// eslint-disable-next-line react/prop-types
function Article({ article, handleRemoveStory }) {
  const { url, title, author, num_comments, points } = article;
  return (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
      <button onClick={() => handleRemoveStory(article)}>Delete</button>
    </li>
  );
}

export default App;
