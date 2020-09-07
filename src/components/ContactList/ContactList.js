import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { contactOperations, contactSelectors } from '../../redux';

import s from './ContactList.module.css';

class ContactList extends Component {
  componentDidMount() {
    this.props.showContacts()
  }
  render() {
    return <ul className={s.contact_list}>
      {this.props.items.map(item => (<li className={s.contact_list_item} key={item.id}><span className={s.contact_name}>{item.name}: </span><span className={s.contact_number}>{item.number}</span>
        <button className={s.btn_delete} title='delete'
          onClick={() => this.props.onDelete(item.id)}
        >x</button>
      </li>))}
    </ul>
  }
}

ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  showContacts: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  items: contactSelectors.getFilteredContacts(state)
})

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactOperations.deleteContact(id)),
  showContacts: () => dispatch(contactOperations.fetchContacts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
