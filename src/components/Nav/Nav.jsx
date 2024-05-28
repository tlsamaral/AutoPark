import { LuHome, LuSettings, LuMapPin } from 'react-icons/lu';
import { GiTurnstile } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Nav() {
  const { setShowAside } = useContext(AppContext);
  const handleClick = () => {
    setShowAside(true);
  };
  return (
    <nav className="w-full mt-5">
      <Link
        to="/"
        className="flex gap-2 text-slate-400 hover:text-white transition-all mt-4 items-center"
        onClick={handleClick}
      >
        <LuHome size={21} />
        <span className="text-base pt-1">Home</span>
      </Link>
      <Link
        to="/vacancies"
        className="flex gap-2 text-slate-400 hover:text-white transition-all mt-4 items-center"
        onClick={handleClick}
      >
        <LuMapPin size={21} />
        <span className="text-base pt-1">Vanancies</span>
      </Link>
      <Link
        to="/users"
        className="flex gap-2 text-slate-400 hover:text-white transition-all mt-4 items-center"
        onClick={handleClick}
      >
        <LuSettings size={21} />
        <span className="text-base pt-1">Users</span>
      </Link>
      <Link
        to="/turnstiles"
        className="flex gap-2 text-slate-400 hover:text-white transition-all mt-4 items-center"
        onClick={handleClick}
      >
        <GiTurnstile size={21} />
        <span className="text-base pt-1">Turnstiles</span>
      </Link>
    </nav>
  );
}

export default Nav;
