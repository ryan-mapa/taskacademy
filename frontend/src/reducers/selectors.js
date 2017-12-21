export const selectMainTasks = state => (
  Object.values(state.entities.tasks)
        .filter(task => !task.parent_id)
);

export const selectSubTasks = (state, parentId) => (
  Object.values(state.entities.tasks)
        .filter(task => task.parent_id === parentId)
);
