import axios from 'axios';

export const postUser = user => (
  axios.post('http://localhost:3000/api/users/login',
  { user })
);

export const getUser = sessionToken => (
  axios.get(`http://localhost:3000/api/users/${sessionToken}`)
);
