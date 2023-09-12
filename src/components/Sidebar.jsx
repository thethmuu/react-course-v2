import { Link, useLocation } from 'react-router-dom';
import { slugify } from '../utils';

export default function SideBar({ title, list }) {
  return (
    <aside className='min-w-[240px]'>
      <h3 className='header'>{title}</h3>
      <ul className='max-w-3xl gap-4 mx-auto mt-4 space-y-2'>
        {list.map((item) => (
          <CustomLink key={item} to={`${slugify(item)}`}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </aside>
  );
}

function CustomLink({ children, to }) {
  const location = useLocation();
  const splitted = location.pathname.split('/');
  const matched = splitted[splitted.length - 1] === to;

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
