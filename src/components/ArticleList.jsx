import { memo, useState } from 'react';
import { sortBy } from 'lodash';

import { ReactComponent as Tick } from '../tick.svg';

import './ArticleList.css';

const SORTINGS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, 'title'),
  AUTHOR: (list) => sortBy(list, 'author'),
  COMMENT: (list) => sortBy(list, 'num_comments').reverse(),
  POINT: (list) => sortBy(list, 'points').reverse(),
};

const ArticleList = memo(({ list, handleRemoveStory }) => {
  const [sort, setSort] = useState({
    sortKey: 'NONE',
    isReverse: false,
  });

  const handleSort = (sortKey) => {
    const isReverse = sort.sortKey === sortKey && !sort.isReverse;

    setSort({ sortKey: sortKey, isReverse: isReverse });
  };

  const sortFunction = SORTINGS[sort.sortKey];
  const sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);

  return (
    <ul className='items-container'>
      <li
        style={{
          display: 'flex',
          fontWeight: '500',
          padding: '14px 0',
          gap: '1rem',
        }}
      >
        <span style={{ width: '50%' }}>
          <button onClick={() => handleSort('TITLE')}>Title</button>
        </span>
        <span style={{ width: '20%' }}>
          <button onClick={() => handleSort('AUTHOR')}>Author</button>
        </span>
        <span style={{ width: '10%' }}>
          <button onClick={() => handleSort('COMMENT')}>Comments</button>
        </span>
        <span style={{ width: '10%' }}>
          <button onClick={() => handleSort('POINT')}>Points</button>
        </span>
        <span style={{ width: '10%' }}>Actions</span>
      </li>

      {sortedList.map((item) => (
        <Article
          key={item.objectID}
          article={item}
          handleRemoveStory={handleRemoveStory}
        />
      ))}
    </ul>
  );
});

export default ArticleList;

// eslint-disable-next-line react/prop-types
function Article({ article, handleRemoveStory }) {
  const { url, title, author, num_comments, points } = article;
  return (
    <li className='item'>
      <span style={{ width: '50%' }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: '20%' }}>{author}</span>
      <span style={{ width: '10%' }}>{num_comments}</span>
      <span style={{ width: '10%' }}>{points}</span>
      <span style={{ width: '10%' }}>
        <button onClick={() => handleRemoveStory(article)}>
          <Tick height='18px' width='18px' />
        </button>
      </span>
    </li>
  );
}
