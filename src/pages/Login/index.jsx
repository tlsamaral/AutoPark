import { HiLocationMarker } from 'react-icons/hi';
import { Container, TitlewLine } from './styled';

import BackgroundImg from '../../assets/images/background_login_page.jpg';
import FormLogin from '../../components/FormLogin/FormLogin';
// import Logo from '../../assets/images/Logo-red.png';

function Login(props) {
  return (
    <Container backgroundImg={BackgroundImg}>
      <div className="w-full max-w-[1550px] mx-auto h-full flex md:justify-end sm:justify-center items-center">
        <div className="md:mr-14 border w-full md:w-2/5 px-10 py-2 rounded-2xl border-neutral-300/5 backdrop-blur-sm h-4/5 max-h-[650px] flex flex-col justify-evenly">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex gap-1 justify-center">
            <div className="flex items-end">
              <HiLocationMarker size={68} className="text-red-600" />
            </div>
            {/* <img src={Logo} alt="logo" /> */}
            <div className="flex flex-col items-start">
              <h2 className="mt-10 text-4xl font-bold leading-9 tracking-tight text-gray-200">
                AutoPark System
              </h2>
              <TitlewLine>Acess with your account</TitlewLine>
            </div>
          </div>
          <div>
            <FormLogin props={props} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
