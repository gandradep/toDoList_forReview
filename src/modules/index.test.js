import { TaskList } from './taskList.js';

jest.mock('./taskList');
describe('add/remove test', () => {
  const mylist = new TaskList();
  const testObj = [
    {
      'description': 'work',
      'completed': false,
      'index': 1
    },
    {
      'description': 'study',
      'completed': false,
      'index': 2
    }

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
});
