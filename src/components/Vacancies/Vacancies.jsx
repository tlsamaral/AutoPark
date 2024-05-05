import { useContext } from 'react';

import VacanciesTable from '../VacanciesTable/VacanciesTable';
import AppContext from '../../context/AppContext';
import ModalDialog from '../ui-radix/ModalDialog/ModalDialog';
import FormVacancy from '../FormVacancy/FormVacancy';

function Vacancies() {
  const { vacancies } = useContext(AppContext);

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-3xl text-slate-200 mt-4 font-bold">Vanacies</h1>
        <ModalDialog
          buttonText="Add New Vanacy"
          description="Register a new vacancy to unlock exclusive features and services. Enter the vacancy description, associated sensor ID, and configure color settings and microcontroller ID to get started!"
        >
          <FormVacancy />
        </ModalDialog>
      </div>
      <VacanciesTable vacancies={vacancies} />
    </div>
  );
}

export default Vacancies;
