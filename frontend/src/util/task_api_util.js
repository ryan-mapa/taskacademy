import axios from 'axios';

export const postTask = task => axios.post(
  'http://localhost:3000/api/tasks', { task }
);

export const getTasks = ownerId => axios.get(
  'http://localhost:3000/api/tasks', { params: { ownerId } }
);

export const getTask = taskId => axios.get(
  `http://localhost:3000/api/tasks/${ taskId }`
);

export const patchTask = task => axios.patch(
  `http://localhost:3000/api/tasks/${ task.id }`, { task }
);

export const deleteTask = taskId => axios.delete(
  `http://localhost:3000/api/tasks/${ taskId }`, { taskId }
);