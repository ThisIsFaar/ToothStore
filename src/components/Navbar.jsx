import { Link } from 'react-router-dom';
import logo from '../assets/icon.svg';

const Navbar = () => {
  return (
    <nav className="p-3 bg-white-900 border-b">
      <Link to="/" className="flex items-center">
        <div className="text-xl flex justify-center w-screen items-center font-semibold ">
          Tooth
          <img className="mx-2 h-6 sm:h-10" src={logo} alt="website logo" />
          Store
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
