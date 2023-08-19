import axios from 'axios';

export const instanceForContacts = axios.create({
  baseURL: 'https://64e00f7b71c3335b258335c1.mockapi.io/',
});
