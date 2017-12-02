import axios from 'axios';

// export const getTasks = (ownerId) => axios.get('http://localhost:3000/api/tasks');
export const getTasks = ownerId => axios.get('http://localhost:3000/api/tasks', {
  params: {
      ownerId
    }
});

export const getTask = taskId => axios.get(`api/tasks/${taskId}`);
