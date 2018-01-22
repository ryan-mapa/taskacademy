export const selectMainTasks = state => (
  Object.values(state.entities.tasks)
        .filter(task => !task.parent_id)
);

export const selectSubTasks = (state, parentId) => (
  Object.values(state.entities.tasks)
        .filter(task => task.parent_id === parentId)
);

export const selectRootTask = (state, taskId) => {
  let rootTask = state.entities.tasks[taskId];
  while (rootTask.parent_task) { rootTask = rootTask.parent_task; }
  return rootTask;
};
