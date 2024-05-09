import { useContext, useEffect } from 'react';

import axios from '../../services/axios';
import AppContext from '../../context/AppContext';
import CardTurnstiles from '../CardTurnstiles/CardTurnstiles';

function ListTurnstiles() {
  const { turnstileData, setTurnstileData } = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/turnstiles');
        setTurnstileData(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();

    setInterval(() => {
      getData();
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="flex gap-2">
      {turnstileData?.map((turnstile) => (
        <CardTurnstiles key={turnstile.id} turnstile={turnstile} />
      ))}
    </section>
  );
}

export default ListTurnstiles;
