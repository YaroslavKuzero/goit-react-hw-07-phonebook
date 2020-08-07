import axios from 'axios';
import { addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, getContactsRequest, getContactsSuccess, getContactsError } from './phonebook-actions'

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => dispatch => {
  dispatch(getContactsRequest())

  axios.get('/contacts').then(({ data }) => dispatch(getContactsSuccess(data))).catch(error => dispatch(getContactsError(error)))
}


const addContact = contact => dispatch => {
  const newContact = {
    name: contact.name,
    number: contact.number
  };

  dispatch(addContactRequest())


  axios.post('/contacts', newContact).then(({ data }) => dispatch(addContactSuccess(data))).catch(error => dispatch(addContactError(error)))
}

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest())

  axios.delete(`/contacts/${id}`).then(() => dispatch(deleteContactSuccess(id))).catch(error => dispatch(deleteContactError(error)))
}

export default {
  addContact,
  deleteContact,
  fetchContacts
}
