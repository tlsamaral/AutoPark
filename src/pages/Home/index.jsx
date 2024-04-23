import { useState } from 'react';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';

import Aside from '../../components/Aside/Aside';
import Main from '../../components/Main/Main';

function Home() {
  const [showAside, setShowAside] = useState(false);

  return (
    <div className="flex w-full h-full overflow-hidden">
      <Aside />
      <Main />
      {!showAside && (
        <button
          type="button"
          className="lg:hidden fixed left-1 top-1/2 z-50 bg-transparent"
          onClick={() => setShowAside(true)}
        >
          {showAside ? (
            <BsChevronCompactLeft
              size={28}
              className="text-white font-extrabold"
            />
          ) : (
            <BsChevronCompactRight
              size={28}
              className="text-white font-extrabold"
            />
          )}
        </button>
      )}
    </div>
  );
}

export default Home;
