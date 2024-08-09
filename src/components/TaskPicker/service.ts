import { Task } from '@/interfaces';

import { Tasks } from './types';

class TaskPickerService {
  private date = '';
  private tasks: Tasks = {};
  getDate() {
    return this.date;
  }
  setDate(value: string) {
    this.date = value;
  }
  constructor() {
    this.getTasksFromLocalStorage();
  }

  getTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
      return this.tasks;
    }
    return {};
  }

  checkDuplicateTasks(title: string, date: string) {
    const tasks = this.getTasksByDate(date);
    return tasks?.some(task => task.title === title);
  }

  getTasksByDate(date: string) {
    return this.tasks[date];
  }

  addTaskToLocalStorage(task: Task) {
    const tasks = this.getTasksFromLocalStorage();

    if (!tasks[task.date]) {
      tasks[task.date] = [];
    }

    tasks[task.date]!.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  removeTaskFromLocalStorage(task: Task) {
    const tasks = this.getTasksFromLocalStorage();

    if (!tasks[task.date]) return;

    tasks[task.date] = tasks[task.date]!.filter(
      (taskItem: Task) => taskItem.title !== task.title,
    );

    if (tasks[task.date]!.length === 0) {
      delete tasks[task.date];
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.tasks = tasks;
  }
}
export const taskPickerService = new TaskPickerService();
