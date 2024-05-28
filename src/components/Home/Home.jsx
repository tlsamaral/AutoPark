import ListCardVanancy from '../ListCardVanacy/ListCardVanancy';
import ListTurnstiles from '../ListTurnstiles/ListTurnstiles';

function Home() {
  return (
    <div className="w-full h-full py-5 flex flex-col gap-4">
      <ListTurnstiles />
      <ListCardVanancy />
    </div>
  );
}

export default Home;
