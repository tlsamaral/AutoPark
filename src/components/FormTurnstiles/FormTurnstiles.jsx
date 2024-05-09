import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AppContext from '../../context/AppContext';
import axios from '../../services/axios';

function FormTurnstiles() {
  const {
    selectedTurnstile,
    setSelectedTurnstile,
    setIsLoading,
    setDialogOpen,
    setTurnstileData,
  } = useContext(AppContext);
  const [formTurnstile, setFormTurnstile] = useState({
    id: 0,
    description: '',
    is_open: false,
  });

  useEffect(() => {
    setFormTurnstile(selectedTurnstile);
  }, [setSelectedTurnstile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormTurnstile((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      setDialogOpen(false);
      if (formTurnstile.description.length <= 3) {
        toast.error('The Description includes less than three characters');
        return;
      }

      if (formTurnstile.id === 0) {
        try {
          const response = await axios.post('/turnstiles/', {
            ...formTurnstile,
          });
          setIsLoading(false);
          toast.success('Turnstile created with success!');
          setTurnstileData((state) => [...state, response.data]); // Adicionando o novo usuário retornado pela API
        } catch (err) {
          setIsLoading(false);
          console.log(err);
          toast.error('Unable to create Turnstile. Try again!');
        }
      } else {
        try {
          await axios.put(`/turnstiles/`, {
            ...formTurnstile,
          });
          setIsLoading(false);
          toast.success('Turnstile updated with success!');
          setTurnstileData((state) =>
            state.map((turnstile) =>
              turnstile.id === formTurnstile.id ? formTurnstile : turnstile
            )
          );
        } catch (err) {
          setIsLoading(false);
          console.log(err);
          toast.error('Unable to update turnstile. Try again!');
        }
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      toast.error('Unable to register turnstile. Try again!');
    }
  };
  return (
    <form className="w-full m-auto flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="mt-3 w-full">
        <label className="text-slate-200" htmlFor="name">
          Description
        </label>
        <input
          className="w-full h-10 rounded-md pl-1"
          type="text"
          name="description"
          onChange={handleChange}
          value={formTurnstile.description}
          required
        />
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

export default FormTurnstiles;
