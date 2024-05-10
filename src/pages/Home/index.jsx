import Aside from '../../components/Aside/Aside';
import Main from '../../components/Main/Main';

function Home() {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <Aside />
      <Main />
    </div>
  );
}

export default Home;
