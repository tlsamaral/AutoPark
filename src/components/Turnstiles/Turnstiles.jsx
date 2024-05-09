import { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import FormTurnstiles from '../FormTurnstiles/FormTurnstiles';
import TurnstilesTable from '../TurnstilesTable/TurnstilesTable';
import AppContext from '../../context/AppContext';
import ModalDialog from '../ui-radix/ModalDialog/ModalDialog';

function Turnstiles() {
  const { turnstileData, setTurnstileData } = useContext(AppContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/turnstiles');
        setTurnstileData(response.data);
      } catch (err) {
        console.log(err);
        toast.error('Failed to fetch turnstiles. Please try again later.');
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-3xl text-slate-200 mt-4 font-bold">Turnstiles</h1>
        <ModalDialog
          buttonText="Add New Turnstile"
          description="Register a new user to unlock exclusive features and services. Enter their name, email, and create a secure password to get started!"
        >
          <FormTurnstiles />
        </ModalDialog>
      </div>
      <TurnstilesTable turnstiles={turnstileData} />
    </div>
  );
}

export default Turnstiles;
