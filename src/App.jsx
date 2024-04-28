import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import Loading from './components/Loading/Loading';
import MyProvider from './context/MyProvider';
import './index.css';
import '@radix-ui/themes/styles.css';

function App() {
  console.log(process.env);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MyProvider>
          <Router history={history}>
            <Loading isLoading />
            <Routes />
            <GlobalStyles />
            <ToastContainer
              autoClose={3000}
              style={{ zIndex: 99999999999999 }}
              className="Toast-container"
              hideProgressBar={false}
            />
          </Router>
        </MyProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
