import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import { toast } from 'react-toastify';
import axios from '../../services/axios';
import DropdownTable from '../ui-radix/DropdownTable/DropdownTable';
import AppContext from '../../context/AppContext';

function Row({ turnstile }) {
  const dateFormated = formatDistanceToNow(new Date(turnstile.updated_at), {
    addSuffix: true,
  });
  const {
    turnstileData,
    setTurnstileData,
    setSelectedTurnstile,
    setDialogOpen,
  } = useContext(AppContext);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/turnstiles/${id}`);
      const newList = turnstileData.filter((u) => u.id !== id);
      setTurnstileData([...newList]);
    } catch (err) {
      console.log(err);
      toast.error('Unknow error.');
    }
  };

  const handleUpdate = async (id) => {
    try {
      console.log(id);

      const getData = await axios.get(`/turnstiles/${id}}`);
      const getTurnstile = getData.data;
      setSelectedTurnstile(getTurnstile);
      setDialogOpen(true);
    } catch (err) {
      console.log(err);
      toast.error('Unknow error.');
    }
  };
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">
        {turnstile.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${turnstile.is_open ? ' bg-green-100 text-green-800' : ' bg-red-100 text-red-800'}`}
        >
          {turnstile.is_open ? 'Opened' : 'Closed'}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">
        {dateFormated}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <DropdownTable
          id={turnstile.id}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </td>
    </tr>
  );
}

function UsersTable({ turnstiles }) {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Last Change
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {turnstiles.map((turnstile) => (
            <Row key={turnstile.id} turnstile={turnstile} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;

UsersTable.propTypes = {
  turnstiles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      is_open: PropTypes.bool,
      updated_at: PropTypes.string,
    })
  ).isRequired,
};

Row.propTypes = {
  turnstile: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    is_open: PropTypes.bool,
    updated_at: PropTypes.string,
  }).isRequired,
};
