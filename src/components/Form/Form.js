import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { contactOperations, contactSelectors } from '../../redux';

import s from './Form.module.css';

const initialState = {
  name: '',
  number: ''
}


class Form extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  }

  state = initialState;

  addContactHandler = (event) => {
    event.preventDefault();
    const { contacts, onSubmit } = this.props;
    const { name } = this.state
    if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} already in your contact list`)
      return;
    }

    onSubmit(this.state)
    this.resetInputs()
  };

  changeHandler = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  }

  resetInputs = () => {
    this.setState(initialState)
  }

  render() {
    const { name, number } = this.state
    return (
      <form className={s.form} onSubmit={this.addContactHandler}>
        <label>
          <input className={s.input_name} name='name' type='text' placeholder='Name' value={name} onChange={this.changeHandler}></input>
        </label>
        <label>
          <input className={s.input_num} name='number' type='tel' placeholder='Number' value={number} onChange={this.changeHandler}></input>
        </label>
        <button className={s.btn_add} type='submit'>Add contact</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: data => dispatch(contactOperations.addContact(data)),
})

const mapStateToProps = (state) => ({
  contacts: contactSelectors.getContacts(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
