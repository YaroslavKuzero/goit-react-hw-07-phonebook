import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  changeFilter
} from './phonebook-actions';

const contacts = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) => state.filter(item => item.id !== payload,)
})

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
})

const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
})

export default combineReducers({ contacts, filter, loading });