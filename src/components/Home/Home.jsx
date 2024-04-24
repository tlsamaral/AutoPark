import { useEffect } from 'react';
import io from 'socket.io-client';
import ListCardVanancy from '../ListCardVanacy/ListCardVanancy';

function Home() {
  useEffect(() => {
    const socket = io('localhost:3001');
    console.log(socket);
    socket.on('connect', () => {
      console.log('Connected to server');
    });
  }, []);
  return (
    <div className="w-full h-full">
      <ListCardVanancy />
    </div>
  );
}

export default Home;
