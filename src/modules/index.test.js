
jest.mock('./taskList');
import {TaskList} from './taskList';
import { TaskTemplate } from './taskTemplate.js';

describe('add/remove test', () => {
let mylist = new TaskList;
test('testing', () => {
  expect(mylist.addTask('work',false,1)).toBe('work');
});
test('testing', () => {
  let array = ['work', 'string', 'test'];
  expect(mylist.removeTask(array, 1)[1]).toBe('test');
});
});