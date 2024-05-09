import PropTypes from 'prop-types';
import { RxUpdate } from 'react-icons/rx';
import { FaCircle } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DropdownFunc from '../ui-radix/DropdownFunc/DropdownFunc';

import axios from '../../services/axios';

function CardVanancy({ vanancy }) {
  const formattedDate = formatDistanceToNow(new Date(vanancy.updated_at), {
    addSuffix: true,
  });

  const [status, setStatus] = useState(false);

  useEffect(() => {
    setStatus(vanancy.is_occupied);
  }, []);

  useEffect(() => {
    setStatus(vanancy.is_occupied);
  }, [vanancy.is_occupied]);

  const handleUpdate = async (id) => {
    try {
      await axios.put(`/vacancies/`, {
        id,
        is_occupied: !status,
      });
      setStatus(!status);
    } catch (err) {
      toast.error('It has occured an error after force changes');
    }
  };

  return (
    <article
      className={`w-full rounded-lg bg-neutral-950 relative border-zinc-700/50 border-2 ${!status ? 'border-t-2 border-t-green-500' : 'border-t-2 border-t-red-500'}`}
    >
      <div className="p-6">
        <p className="text-xl text-slate-200 mb-6">{vanancy.description}</p>
        <div className="w-full mt-2 flex gap-6 justify-between">
          <div className="flex gap-2">
            <FaCircle
              size={22}
              className={!status ? `text-green-500` : `text-red-500`}
            />
            <span className="text-slate-200">
              {!status ? 'Free' : 'Occupied'}
            </span>
          </div>
          <div className="flex gap-2">
            <span className="text-slate-200">
              <RxUpdate size={20} />
            </span>
            <span className="text-slate-200">{formattedDate}</span>
          </div>
        </div>
      </div>

      <span className="absolute top-3 right-2 cursor-pointer">
        <DropdownFunc id={vanancy.id} handleUpdate={handleUpdate} />
      </span>
    </article>
  );
}

export default CardVanancy;

CardVanancy.propTypes = {
  vanancy: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    sensor_id: PropTypes.string.isRequired,
    port_r: PropTypes.string.isRequired,
    port_g: PropTypes.string.isRequired,
    port_b: PropTypes.string.isRequired,
    micro_id: PropTypes.string.isRequired,
    is_occupied: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
  }).isRequired,
};
