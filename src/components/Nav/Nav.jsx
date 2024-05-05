import { LuHome, LuSettings, LuMapPin } from 'react-icons/lu';
import { GiTurnstile } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="w-full mt-5">
      <Link
        to="/"
        className="flex gap-2 text-slate-400 hover:text-white transition-all mt-4 items-center"
      >
        <LuHome size={21} />
        <span className="text-base pt-1">Home</span>
      </Link>
      <Link
        to="/vacancies"
        className="flex gap-2 text-slate-400 hover:text-white transition-all mt-4 items-center"
      >
        <LuMapPin size={21} />
        <span className="text-base pt-1">Vanancies</span>
      </Link>
      <Link
        to="/users"
        className="flex gap-2 text-slate-400 hover:text-white transition-all mt-4 items-center"
      >
        <LuSettings size={21} />
        <span className="text-base pt-1">Users</span>
      </Link>
      <Link
        to="/turnstiles"
        className="flex gap-2 text-slate-400 hover:text-white transition-all mt-4 items-center"
      >
        <GiTurnstile size={21} />
        <span className="text-base pt-1">Turnstiles</span>
      </Link>
    </nav>
  );
}

export default Nav;
