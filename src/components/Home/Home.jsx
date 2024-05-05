import ListCardVanancy from '../ListCardVanacy/ListCardVanancy';
import ListTurnstiles from '../ListTurnstiles/ListTurnstiles';

function Home() {
  return (
    <div className="w-full h-full pt-10 flex flex-col gap-4">
      <ListTurnstiles />
      <ListCardVanancy />
    </div>
  );
}

export default Home;
