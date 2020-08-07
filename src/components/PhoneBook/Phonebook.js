import React, { Component } from 'react';
import Form from '../Form';
import Filter from '../FindContact';
import ContactList from '../ContactList';
import Spinner from '../Spinner';
import styles from './PhoneBook.module.css';
import { connect } from 'react-redux';



class Phonebook extends Component {
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
  isloading: state.loading
})



export default connect(mapStateToProps, null)(Phonebook);
