import axios from 'axios';

export const postUser = user => axios.post('http://localhost:3000/api/users', { user });