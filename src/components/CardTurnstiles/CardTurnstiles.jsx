import { useState, useEffect } from 'react';
import { RxUpdate } from 'react-icons/rx';
import { FaCircle } from 'react-icons/fa';
import propTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { toast } from 'react-toastify';

import DropdownFunc from '../ui-radix/DropdownFunc/DropdownFunc';
import axios from '../../services/axios';

function CardTurnstiles({ turnstile }) {
  const formattedDate = formatDistanceToNow(new Date(turnstile.updated_at), {
    addSuffix: true,
  });

  const [status, setStatus] = useState(turnstile.is_open);

  useEffect(() => {
    setStatus(turnstile.is_open);
  }, []);

  useEffect(() => {
    setStatus(turnstile.is_open);
  }, [turnstile.is_open]);

  const handleUpdate = async (id) => {
    console.log(id);
    try {
      await axios.put(`/turnstiles/`, {
        id,
        is_open: !status,
      });
      setStatus(!status);
    } catch (err) {
      console.log(err);
      toast.error('It has occured an error after force changes');
    }
  };
  return (
    <article
      className={`w-1/2 rounded-lg bg-neutral-950 p-6 relative  border-zinc-700/50 border-2 ${status ? 'border-t-green-500' : ' border-t-red-500'}`}
    >
      <p className="text-xl text-slate-200 mb-6">{turnstile.description}</p>
      <div className="w-full mt-2 flex gap-6 justify-between">
        <div className="flex gap-2">
          <FaCircle
            size={22}
            className={`${status ? 'text-green-500' : 'text-red-500'}`}
          />
          <span className="text-slate-200">{status ? 'Opened' : 'Closed'}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-slate-200">
            <RxUpdate size={20} />
          </span>
          <span className="text-slate-200">{formattedDate}</span>
        </div>
      </div>

      <span className="absolute top-3 right-2 cursor-pointer">
        <DropdownFunc id={turnstile.id} handleUpdate={handleUpdate} />
      </span>
    </article>
  );
}

export default CardTurnstiles;

CardTurnstiles.propTypes = {
  turnstile: propTypes.shape({
    id: propTypes.number,
    description: propTypes.string,
    is_open: propTypes.bool,
    updated_at: propTypes.string,
  }).isRequired,
};
