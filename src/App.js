import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './redux';

import Phonebook from './components';

import './css/body.css';

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
