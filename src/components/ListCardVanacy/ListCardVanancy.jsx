import { useState, useEffect } from 'react';
import CardVanancy from '../CardVanancy/CardVanancy';

function ListCardVanancy() {
  const [vanancies, setVanancies] = useState([]);

  useEffect(() => {
    const vagas = [
      {
        id: 1,
        name: 'Spot 1',
        description: 'Standard parking spot',
        filled: false,
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Spot 2',
        description: 'Parking spot for people with disabilities',
        filled: true,
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Spot 3',
        description: 'Reserved spot for seniors',
        filled: false,
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Spot 4',
        description: 'Loading and unloading spot',
        filled: false,
        updatedAt: new Date(),
      },
      {
        id: 5,
        name: 'Spot 5',
        description: 'VIP spot',
        filled: true,
        updatedAt: new Date(),
      },
    ];

    setVanancies(vagas);
  }, []); // Executar apenas uma vez ao montar o componente

  return (
    <section className="w-full flex flex-wrap gap-4 mt-10 py-3">
      {vanancies.map((vanancy) => (
        <CardVanancy key={vanancy.id} vanancy={vanancy} />
      ))}
    </section>
  );
}

export default ListCardVanancy;
