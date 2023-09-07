import { Link, useLocation } from 'react-router-dom';
import { slugify } from '../utils';

export default function SideBar({ title, list }) {
  return (
    <section className=''>
      <h3 className='header'>{title}</h3>
      <ul className='max-w-3xl gap-4 mx-auto mt-4 space-y-2'>
        {list.map((item) => (
          <CustomLink key={item} to={`${slugify(item)}`}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </section>
  );
}

function CustomLink({ children, to }) {
  const location = useLocation();
  const playerId = location.pathname.split('/')[2];
  const matched = playerId === to;

  return (
    <li>
      <Link
        className={matched ? 'font-bold' : ''}
        to={{
          pathname: to,
          search: location.search,
        }}
      >
        {children} {matched ? '✨' : null}
      </Link>
    </li>
  );
}
