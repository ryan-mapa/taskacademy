import axios from 'axios';

export const postUser = user => (
  axios.post('https://task-academy.herokuapp.com/api/users/login',
  { user })
);

export const getUser = sessionToken => (
  axios.get(`https://task-academy.herokuapp.com/api/users/${sessionToken}`)
);
