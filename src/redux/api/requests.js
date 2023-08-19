// //* якщо в нас запити з одного сайту то можемо лише встановити базовий URL для axios:

import axios from 'axios';

// Встановлення базового URL для axios
axios.defaults.baseURL = 'https://64e00f7b71c3335b258335c1.mockapi.io/';

export const getAllContacts = async () => {
  const { data } = await axios('contacts');
  return data;
};

export const postContact = async newContact => {
  const { data } = await axios.post('contacts', newContact);
  return data;
};

export const deleteСontact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};







// //* якщо в нас запити з різних сайтів то будемо використовувати axios.create instance для кожного URL:
// import { instanceForContacts } from './api';

// export const getAllContacts = async () => {
//   const { data } = await instanceForContacts('contacts');
//   return data;
// };

// export const postContact = async data => {
//   const { data } = await instanceForContacts.post('contacts', { name, phone });
//   return data;
// };

// export const deleteСontact = async id => {
//   const { data } = await instanceForContacts.delete(`contacts/${id}`);
//   return data;
// };
