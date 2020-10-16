import axios from 'axios';
import contactActions from './phonebook-actions'

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => async dispatch => {
  await dispatch(contactActions.getContactsRequest())
  try {
    const { data } = await axios.get('/contacts');
    await dispatch(contactActions.getContactsSuccess(data));
  } catch (error) {
    await dispatch(contactActions.getContactsError(error))
  }
}


const addContact = contact => async dispatch => {
  const newContact = {
    name: contact.name,
    number: contact.number
  };

  await dispatch(contactActions.addContactRequest())
  try {
    const { data } = await axios.post('/contacts', newContact);
    await dispatch(contactActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactActions.addContactError(error));
  }
}

const deleteContact = id => async dispatch => {
  await dispatch(contactActions.deleteContactRequest())
  try {
    await axios.delete(`/contacts/${id}`);
    await dispatch(contactActions.deleteContactSuccess(id))
  } catch (error) {
    await dispatch(contactActions.deleteContactError(error))
  }
}

export default {
  addContact,
  deleteContact,
  fetchContacts
}
