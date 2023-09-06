import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='border-b border-gray-500'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <Link to='/'>Home</Link>

        <ul className='flex justify-between items-center gap-6'>
          <li>
            <Link className='py-2 px-4' to='/players'>
              Players
            </Link>
          </li>
          <li>
            <Link className='py-2 px-4' to='/teams'>
              Teams
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
