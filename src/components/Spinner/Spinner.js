
import React, { Component } from 'react';

import Loader from 'react-loader-spinner';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Spinner.module.css';

class Spinner extends Component {

  render() {
    return (
      <Loader className={s.spinner} type="Grid" color="#00BFFF" height={70} width={70} />
    );
  }
}

export default Spinner;