import { AsyncStorage } from 'react-native';
import moment from 'moment';

export function getItem(key) {

  return AsyncStorage.getItem(key);

}

export function setItem(key, value) {

  return AsyncStorage.setItem(key, value);

}

export function removeItem(key) {

  return AsyncStorage.removeItem(key);

}

export function mergeItem(key, value) {

  return AsyncStorage.mergeItem(key, value);

}

export function getAllKeys() {

  return AsyncStorage.getAllKeys();

}

export function hasExpired(expiry) {

  return moment().isAfter(expiry);

}
