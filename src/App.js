import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import './css/body.css';
import Phonebook from './components';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Phonebook />
      </Provider>
    </Fragment>
  );
}

export default App;
