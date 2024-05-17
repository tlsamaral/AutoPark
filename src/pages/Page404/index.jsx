import { HiLocationMarker } from 'react-icons/hi';

function Page404() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex items-center">
        <HiLocationMarker size={68} className="text-red-600" />
        <h1 className="text-6xl">404</h1>
      </div>
      <h1 className="text-3xl">Página não encontrada</h1>
    </div>
  );
}

export default Page404;
