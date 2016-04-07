import Contacts from 'react-native-contacts';
import moment from 'moment';
import * as Storage from '../services/storage';
import { CONTACTS_KEY, CONTACTS_EXPIRY } from '../constants/storage';

export function getAll() {

  return new Promise((resolve, reject) => {

    Contacts.getAll((error, contacts) => {
      if (error && error.type === 'permissionDenied') {
        reject({ error });
      } else {
        resolve({ contacts });
      }
    });

  });

}

export function saveAsyncStorage(contacts) {

  const expires = moment().add(CONTACTS_EXPIRY, 's');

  const value = {
    contacts,
    expires
  };

  return Storage.setItem(CONTACTS_KEY, JSON.stringify(value));

}

export function retrieveAsyncStorage() {

  return Storage.getItem(CONTACTS_KEY);

}
