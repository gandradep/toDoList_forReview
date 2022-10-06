/* eslint-disable import/prefer-default-export */
import { TaskTemplate } from './taskTemplate.js';

export class TaskList {
  constructor() {
    this.taskArray = [];
  }

  addTask = (task, completed, index) => {
    const taskAdded = new TaskTemplate(task, completed, index);
    this.taskArray.push(taskAdded);
    return this.taskArray[this.taskArray.length - 1].description;
  }

  removeTask = (arr, index) => {
    arr.splice(index, 1);
    return arr;
  }
}
