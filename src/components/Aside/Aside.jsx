import { useContext } from 'react';
import { CgClose } from 'react-icons/cg';
import { HiLocationMarker } from 'react-icons/hi';

import Nav from '../Nav/Nav';
import UserCard from '../UserCard/UserCard';
import AppContext from '../../context/AppContext';

function Aside() {
  const { showAside, setShowAside } = useContext(AppContext);

  const handleClick = () => {
    setShowAside(!showAside);
  };
  return (
    <>
      <aside
        className={`lg:w-1/5 md:w-[300px] w-4/5 m-w-[300px] z-30 h-full p-6 bg-neutral-950 lg:block border-r lg:translate-x-0 border-gray-100/40 shadow-inner relative transition-all ${showAside ? 'translate -translate-x-full' : 'md:translate-x-0'}`}
      >
        <div className="w-full flex justify-between items-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex gap-1 justify-between items-center">
            <div className="flex items-center gap-1">
              <div className="flex items-end">
                <HiLocationMarker size={36} className="text-red-600" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-bold leading-9 tracking-tight text-gray-200">
                  AutoPark System
                </h2>
                <small className="-mt-3 text-xs">Parking management</small>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="block lg:hidden bg-transparent transition-all right-1"
            onClick={handleClick}
          >
            <CgClose
              size={28}
              className="text-gray-100/60 font-black hover:text-white transition-all"
            />
          </button>
        </div>

        <div className="mt-16">
          <h4 className="text-xs text-slate-400/75">Navegation</h4>
        </div>
        <Nav />
        <UserCard />
      </aside>
    </>
  );
}

export default Aside;
