import {TaskList} from './taskList';

jest.mock('./taskList');
describe('add/remove test', () => {
const mylist = new TaskList;
test('testing', () => {
  expect(mylist.addTask('work',false,1)).toBe('work');
});
test('testing', () => {
  const array = ['work', 'string', 'test'];
  expect(mylist.removeTask(array, 1)[1]).toBe('test');
});
});
