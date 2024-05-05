import { RxUpdate } from 'react-icons/rx';
import { FaCircle } from 'react-icons/fa';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import propTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

function CardTurnstiles({ turnstile }) {
  const formattedDate = formatDistanceToNow(new Date(turnstile.updated_at), {
    addSuffix: true,
  });
  return (
    <article className="w-1/2 rounded-lg bg-neutral-950 p-6 relative  border-zinc-700/50 border-2 border-t-red-500">
      <p className="text-xl text-slate-200 mb-6">{turnstile.description}</p>
      <div className="w-full mt-2 flex gap-6 justify-between">
        <div className="flex gap-2">
          <FaCircle
            size={22}
            className={`${turnstile.is_open ? 'text-green-500' : 'text-red-500'}`}
          />
          <span className="text-slate-200">
            {turnstile.is_open ? 'Opened' : 'Closed'}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-slate-200">
            <RxUpdate size={20} />
          </span>
          <span className="text-slate-200">{formattedDate}</span>
        </div>
      </div>

      <span className="absolute top-3 right-2 cursor-pointer">
        <PiDotsThreeOutlineVerticalFill className="text-slate-200" />
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
