import axios from 'axios';

export const getTasks = () => axios.get('api/tasks');

export const getTask = (taskId) => axios.get(`api/tasks/${taskId}`);
