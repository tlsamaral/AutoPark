import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import { MdEditNote } from 'react-icons/md';

import { toast } from 'react-toastify';
import axios from '../../services/axios';
import DropdownTable from '../ui-radix/DropdownTable/DropdownTable';
import AppContext from '../../context/AppContext';

function Row({ vacancy }) {
  const { vacancies, setVacancies, setDialogOpen, setSelectedVacancy } =
    useContext(AppContext);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/vacancies/${id}`);
      const newList = vacancies.filter((u) => u.id !== id);
      setVacancies([...newList]);
    } catch (err) {
      console.log(err);
      toast.error('Unknow error.');
    }
  };

  const handleUpdate = async (id) => {
    try {
      const getData = await axios.get(`/vacancies/${id}}`);
      const getVacancy = getData.data;
      setSelectedVacancy(getVacancy);
      setDialogOpen(true);
    } catch (err) {
      console.log(err);
      toast.error('Unknow error.');
    }
  };
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">
        {vacancy.description}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">
        {vacancy.sensor_id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">
        {vacancy.port_r}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">
        {vacancy.port_g}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-slate-50">
        {vacancy.port_b}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <DropdownTable
          id={vacancy.id}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </td>
    </tr>
  );
}

function VacanciesTable({ vacancies }) {
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
              Id Sensor
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Porta_Red
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Porta_Green
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            >
              Porta_Blue
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-200/50 uppercase tracking-wider"
            />
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {vacancies.map((vacancy) => (
            <Row key={vacancy.id} vacancy={vacancy} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VacanciesTable;

VacanciesTable.propTypes = {
  vacancies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string,
      sensor_id: PropTypes.string,
      port_r: PropTypes.string,
      port_g: PropTypes.string,
      port_b: PropTypes.string,
      micro_id: PropTypes.string,
    })
  ).isRequired,
};

Row.propTypes = {
  vacancy: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    sensor_id: PropTypes.string,
    port_r: PropTypes.string,
    port_g: PropTypes.string,
    port_b: PropTypes.string,
    micro_id: PropTypes.string,
  }).isRequired,
};
