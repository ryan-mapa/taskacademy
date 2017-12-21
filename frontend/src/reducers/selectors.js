export const selectMainTasks = state => {
  return Object.values(state.entities.tasks).filter(task => (!task.parent_id));
};

export const selectSubTasks = state => {

};
