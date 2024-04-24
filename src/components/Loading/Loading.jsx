import { useContext } from 'react';
import './Loading.css';
import AppContext from '../../context/AppContext';

function Loading() {
  const { isLoading } = useContext(AppContext);
  if (!isLoading) return <></>;
  return (
    <div className="w-screen h-screen bg-black/70 flex justify-center items-center absolute z-50">
      <div className="loader" />
    </div>
  );
}

export default Loading;
