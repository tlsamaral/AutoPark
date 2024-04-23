import PropTypes from 'prop-types';
import { RxUpdate } from 'react-icons/rx';
import { FaCircle } from 'react-icons/fa';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
import { formatDistanceToNow } from 'date-fns';

function CardVanancy({ vanancy }) {
  const formattedDate = formatDistanceToNow(new Date(vanancy.updatedAt), {
    addSuffix: true,
  });
  return (
    <article className="w-full rounded-lg bg-neutral-950 p-6 relative  border-zinc-700/50 border-2 ">
      <p className="text-xl text-slate-200 mb-6">{vanancy.description}</p>
      <div className="w-full mt-2 flex gap-6 justify-between">
        <div className="flex gap-2">
          <FaCircle
            size={22}
            className={vanancy.filled ? `text-green-500` : `text-red-500`}
          />
          <span className="text-slate-200">
            {vanancy.filled ? 'Free' : 'Occupied'}
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

export default CardVanancy;

CardVanancy.propTypes = {
  vanancy: PropTypes.shape({
    description: PropTypes.string.isRequired,
    filled: PropTypes.bool.isRequired,
    updatedAt: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};
