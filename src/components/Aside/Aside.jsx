import Logo from '../../assets/images/logo40.png';
import Nav from '../Nav/Nav';
import UserCard from '../UserCard/UserCard';

function Aside() {
  return (
    <aside className="w-1/5 h-full p-6 bg-neutral-950 hidden lg:block shadow-white relative border-r border-gray-100/10">
      <div className="w-full flex justify-between items-center">
        <img src={Logo} alt="logo" className="cursor-pointer" />
      </div>

      <div className="mt-16">
        <h4 className="text-xs text-slate-400/75">Navegation</h4>
      </div>
      <Nav />
      <UserCard />
    </aside>
  );
}

export default Aside;
