import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AppContext from '../../context/AppContext';
import axios from '../../services/axios';

function FormVacancy() {
  const {
    selectedVacancy,
    setSelectedVacancy,
    setIsLoading,
    setDialogOpen,
    setVacancies,
  } = useContext(AppContext);
  const [formVacancy, setFormVacancy] = useState({
    id: 0,
    description: '',
    sensor_id: '',
    port_r: '',
    port_g: '',
    port_b: '',
    micro_id: '',
    is_occupied: false,
  });

  useEffect(() => {
    setFormVacancy(selectedVacancy);
  }, [setSelectedVacancy]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVacancy((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      setDialogOpen(false);
      if (formVacancy.description.length <= 3) {
        toast.error('The Description includes less than three characters');
        return;
      }
      formVacancy.is_occupied = false;
      if (formVacancy.id === 0) {
        try {
          const response = await axios.post('/vacancies/', {
            ...formVacancy,
          });
          setIsLoading(false);
          toast.success('Vacancy created with success!');
          setVacancies((state) => [...state, response.data]); // Adicionando o novo usuário retornado pela API
        } catch (err) {
          setIsLoading(false);
          console.log(err);
          toast.error('Unable to create Vacancy. Try again!');
        }
      } else {
        try {
          await axios.put(`/vacancies/`, {
            ...formVacancy,
          });
          setIsLoading(false);
          toast.success('Vacancy updated with success!');
          setVacancies((state) =>
            state.map((vacancy) =>
              vacancy.id === formVacancy.id ? formVacancy : vacancy
            )
          );
        } catch (err) {
          setIsLoading(false);
          console.log(err);
          toast.error('Unable to update vacancy. Try again!');
        }
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error('Unable to register user. Try again!');
    }
  };
  return (
    <form className="w-full m-auto flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="mt-3 w-full">
        <label className="text-slate-200" htmlFor="name">
          Description
        </label>
        <textarea
          className="w-full h-16 rounded-md pl-1"
          type="text"
          name="description"
          onChange={handleChange}
          value={formVacancy.description}
          required
        />
      </div>
      <div className="flex justify-between items-center mt-3 gap-2">
        <div className="w-full">
          <label className="text-slate-200" htmlFor="email">
            Id Sensor
          </label>
          <input
            className="w-full h-10 rounded-md pl-1"
            type="text"
            name="sensor_id"
            onChange={handleChange}
            value={formVacancy.sensor_id}
            required
          />
        </div>
        <div className="w-full">
          <label className="text-slate-200" htmlFor="email">
            Id Micro
          </label>
          <input
            className="w-full h-10 rounded-md pl-1"
            type="text"
            name="micro_id"
            onChange={handleChange}
            value={formVacancy.micro_id}
            required
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 gap-2">
        <div className="w-full">
          <label className="text-slate-200" htmlFor="email">
            Port Red
          </label>
          <input
            className="w-full h-10 rounded-md pl-1"
            type="text"
            name="port_r"
            onChange={handleChange}
            value={formVacancy.port_r}
          />
        </div>
        <div className="w-full">
          <label className="text-slate-200" htmlFor="email">
            Port Green
          </label>
          <input
            className="w-full h-10 rounded-md pl-1"
            type="text"
            name="port_g"
            onChange={handleChange}
            value={formVacancy.port_g}
          />
        </div>
        <div className="w-full">
          <label className="text-slate-200" htmlFor="email">
            Port Blue
          </label>
          <input
            className="w-full h-10 rounded-md pl-1"
            type="text"
            name="port_b"
            onChange={handleChange}
            value={formVacancy.port_b}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="w-1/3 h-10 bg-slate-500 rounded-md mt-9 text-slate-100 shadow-lg"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default FormVacancy;
