import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook-actions';
import styles from './FindContact.module.css';

const Filter = ({ value, onChange }) => (
  <label>
    <input className={styles.find_contact} type='text' placeholder='Find contact by name' value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = (state) => ({
  value: state.filter,
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(changeFilter(event.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);