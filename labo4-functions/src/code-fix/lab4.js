// TODO: Fix the errors in the functions below! 

function addTask(taskList, newTask) {
  taskList.push(newTask);
  return taskList;
}

function deleteTask(taskList, index) {
  taskList.splice(index, 1);
  return taskList;
}

function editTask(taskList, index, editedTask) {
  taskList.splice(index, 1, editedTask);
  return taskList;
}

function completeTask(taskList, index) {
  taskList[index].completed = true
  return taskList;
}

function clearCompletedTasks(taskList) {
  
  return taskList.filter((e) => e.completed === false);
}

function sortTasksByDate(taskList) {
  const sortByDate = (a, b) => {
    return a.date - b.date;
  }
  return taskList.sort(sortByDate);
}

function filterTasksByKeyword(taskList, keyword) {
  const filterByKeyWord = (e) => {
    e1 = e.toUpperCase();
    return e1.includes(keyword.toUpperCase());
  }
  return taskList.filter(filterByKeyWord);
}

function getCompletedTasks(taskList) {
  return taskList.filter((e) => e.completed === true);
}

function getIncompleteTasks(taskList) {
  return taskList.filter((e) => e.completed !== true);
}

function getTaskCount(taskList) {
  return taskList.length;
}

function getCompletedTaskCount(taskList) {
  const completed = taskList.filter((e) => e.completed === true)
  return completed.length;
}

function getIncompleteTaskCount(taskList) {
  const completed = taskList.filter((e) => e.completed !== true)
  return completed.length;
}

function removeCompletedTasks(taskList) {
  
  return taskList;
}

function markAllTasksAsCompleted(taskList) {
  return taskList;
}

function markAllTasksAsIncomplete(taskList) {
  return taskList;
}

function addTaskToList(taskList, task) {
  return task;
}

function deleteTaskFromList(taskList, index) {
  return index;
}

function editTaskInList(taskList, index, newTask) {
  return newTask;
}

function moveTaskUp(taskList, index) {
  if (index === 0) {
    return taskList;
  }
  // const newIndex = index - 1;
  return taskList;
}

function moveTaskDown(taskList, index) {
  if (index === taskList.length - 1) {
    return taskList;
  }
  // const newIndex = index + 1;
  return taskList;
}

module.exports = {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  clearCompletedTasks,
  sortTasksByDate,
  filterTasksByKeyword,
  getCompletedTasks,
  getCompletedTaskCount,
  getIncompleteTaskCount,
  getTaskCount,
  getIncompleteTasks,
  removeCompletedTasks,
  markAllTasksAsCompleted,
  markAllTasksAsIncomplete,
  addTaskToList,
  editTaskInList,
  deleteTaskFromList,
  moveTaskUp,
  moveTaskDown,
};
