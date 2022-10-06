import { TaskList } from './taskList.js';
import { clearComplete } from './clearComplete.js';

jest.mock('./taskList');
jest.mock('./clearComplete');
describe('add/remove test', () => {
  const mylist = new TaskList();
  const testObj = [
    {
      description: 'work',
      completed: false,
      index: 1,
    },
    {
      description: 'study',
      completed: false,
      index: 2,
    },
  ];
  test('testing', () => {
    expect(mylist.addTask('work', false, 1)).toBe('work');
  });
  test('testing', () => {
    const array = ['work', 'string', 'test'];
    expect(mylist.removeTask(array, 1)[1]).toBe('test');
  });
  test('test update', () => {
    expect(mylist.updateTask(testObj, 2, 'exercise')).toBe('exercise');
  });
  test('test completed status', () => {
    document.body.innerHTML = '<input id="box" type="checkbox" checked>';
    const checkBox = document.getElementById('box');
    expect(mylist.updateStatus(testObj, 2, checkBox.checked)).toBe(true);
  });
  /* this test takes the modification of last test */
  test('test clear completed', () => {
    expect(clearComplete(testObj)).toBe(1);
  });
});
