export let tasks = [
  { id: "1", task: "first", done: false },
  { id: "2", task: "second", done: false },
  { id: "3", task: "third", done: false },
];

export function addTask(newTask) {
  tasks.push(newTask);
}

export function editTask(updatedTask) {
  const updatedTasks = tasks.map((task) => {
    if (!(task.id === updatedTask.id)) {
      return task;
    }

    return updatedTask;
  });

  tasks = updatedTasks;
}
