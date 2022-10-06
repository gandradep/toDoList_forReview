import { TaskTemplate } from './taskTemplate.js';
export class TaskList {
  constructor() {
    this.taskArray = [];
  }
  addTask = (task, completed, index) => {
    const taskAdded = new TaskTemplate(task, completed, index);
    this.taskArray.push(taskAdded);
    // localStorage.setItem('Task_list', JSON.stringify(this.taskArray));

    return this.taskArray[this.taskArray.length-1].description;
  }
  removeTask = (arr, index) => {
    arr.splice(index, 1);
    // localStorage.setItem('Task_list', JSON.stringify(this.taskArray));
    // element.classList.toggle('dNone');
    // element.previousSibling.classList.toggle('dNone');
    // this.displayList();
    return arr;
  }
}
