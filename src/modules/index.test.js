
jest.mock('./taskList');
import {TaskList} from './taskList';
import { TaskTemplate } from './taskTemplate.js';

let mylist = new TaskList;
test('testing', () => {
  expect(mylist.addTask('work',false,1)).toBe('work');
});
