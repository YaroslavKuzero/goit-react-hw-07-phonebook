import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactSelectors } from '../../redux';
import PropTypes from 'prop-types';

import Form from '../Form';
import Filter from '../FindContact';
import ContactList from '../ContactList';
import Spinner from '../Spinner';

import s from './PhoneBook.module.css';

class Phonebook extends Component {

  static propTypes = {
    isloading: PropTypes.bool.isRequired,
  }

  render() {
    const { isloading } = this.props
    return (
      <div className={s.phonebook}>
        {isloading ? <Spinner /> : <h1 className={s.phonebook_header}>Phonebook</h1>}
        <h2 className={s.section_header}>Create a new contact</h2>
        <Form />

        <h2 className={s.section_header}>Contacts</h2>
        <Filter />
        <ContactList />
      </div >
    )
  }
}

const mapStateToProps = state => ({
  isloading: contactSelectors.getLoading(state)
})

export default connect(mapStateToProps, null)(Phonebook);
