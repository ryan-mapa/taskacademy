import axios from 'axios';
import { AsyncStorage } from 'react-native';

const getAsyncSessionToken = () => (
  AsyncStorage.getItem('@task-academy:session_token')
);

export const postTask = task => (
  getAsyncSessionToken().then(sessionToken => axios.post(
  'http://localhost:3000/api/tasks', { task, sessionToken }))
);

export const getTasks = ownerId => (
  getAsyncSessionToken().then(sessionToken => {
    console.log(sessionToken);
    return axios.get(
      'http://localhost:3000/api/tasks', { params: {sessionToken} }
    );
  }
));

export const getTask = taskId => (
  getAsyncSessionToken().then(sessionToken => axios.get(
  `http://localhost:3000/api/tasks/${ taskId }`, { params: {sessionToken} }))
);

export const patchTask = task => (
  getAsyncSessionToken().then(sessionToken => axios.patch(
  `http://localhost:3000/api/tasks/${ task.id }`, { task, sessionToken }))
);

export const deleteTask = taskId => (
  getAsyncSessionToken().then(sessionToken => axios.delete(
  `http://localhost:3000/api/tasks/${ taskId }`, { params: { sessionToken } }))
);
