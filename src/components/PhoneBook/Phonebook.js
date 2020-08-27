import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactSelectors } from '../../redux';
import PropTypes from 'prop-types';
import Form from '../Form';
import Filter from '../FindContact';
import ContactList from '../ContactList';
import Spinner from '../Spinner';
import styles from './PhoneBook.module.css';

class Phonebook extends Component {

  static propTypes = {
    isloading: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <div className={styles.phonebook}>
        {this.props.isloading ? <Spinner /> : <h1 className={styles.phonebook_header}>Phonebook</h1>}
        <h2 className={styles.section_header}>Create a new contact</h2>
        <Form />

        <h2 className={styles.section_header}>Contacts</h2>
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
