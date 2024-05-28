import { useContext } from 'react';
import { GrList } from 'react-icons/gr';

import AppContext from '../../context/AppContext';

function Header() {
  const { setShowAside } = useContext(AppContext);
  return (
    <header className="w-full pt-4 sticky top-0 z-20 border-b backdrop-blur flex items-center">
      <GrList
        size={24}
        className="text-gray-100/60 font-black hover:text-white cursor-pointer mr-4 lg:hidden transition-all"
        onClick={() => setShowAside(false)}
      />
      <h1 className="md:text-4xl text-2xl font-bold text-slate-300 py-3 transition-all">
        Welcome to Auto Park!
      </h1>
    </header>
  );
}

export default Header;
