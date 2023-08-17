import './ArticleList.css';

export default function ArticleList({ list, handleRemoveStory }) {
  return (
    <ul className='items-container'>
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
    <li className='item'>
      <span style={{ width: '40%' }}>
        <a href={url}>{title}</a>
      </span>
      <span style={{ width: '30%' }}>{author}</span>
      <span style={{ width: '10%' }}>{num_comments}</span>
      <span style={{ width: '10%' }}>{points}</span>
      <button
        className='button'
        style={{ width: '10%' }}
        onClick={() => handleRemoveStory(article)}
      >
        Delete
      </button>
    </li>
  );
}
