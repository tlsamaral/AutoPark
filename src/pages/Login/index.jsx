import { Container, TitlewLine } from './styled';

import BackgroundImg from '../../assets/images/background_login_page.jpg';
import FormLogin from '../../components/FormLogin/FormLogin';

function Login(props) {
  return (
    <Container backgroundImg={BackgroundImg}>
      <div className="w-full h-full flex md:justify-end sm:justify-center items-center">
        <div className="md:mr-16 border w-full max-w-md px-7 py-5 rounded-2xl border-neutral-200/5 backdrop-blur-sm">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="flex flex-col items-center">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
                AutoPark System
              </h2>
              <TitlewLine>Acess with your account</TitlewLine>
            </div>
          </div>
          <div className="mt-8">
            <FormLogin props={props} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
