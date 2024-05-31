import { useEffect, useContext } from 'react';
import CardVanancy from '../CardVanancy/CardVanancy';

import axios from '../../services/axios';
import AppContext from '../../context/AppContext';

function ListCardVanancy() {
  const { vacancies, setVacancies } = useContext(AppContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/vacancies');
        setVacancies(response.data);
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
    <section className="w-full flex flex-wrap gap-4">
      {vacancies.map((vanancy) => (
        <CardVanancy key={vanancy.id} vanancy={vanancy} />
      ))}
    </section>
  );
}

export default ListCardVanancy;
