import { Todo } from '../models';
import {
  handleCreateTodo,
  handleDeleteTodo,
  handleSetVisFilter,
  handleToggleTodo,
  handleUpdateTodo,
} from '../reducers';
import { VIS_FILTERS } from '../actionConstants';
import {
  deleteTodo,
  updateTodo,
  toggleTodo,
  setVisFilter,
} from '../actionCreators';

const firstTodo = new Todo({ text: 'first todo' });
const initState = {
  todos: [firstTodo],
  visFilter: VIS_FILTERS.ALL,
};

let state = initState;
beforeEach(() => {
  state = { ...initState };
});

test('handleCreateTodo', () => {
  const newState = handleCreateTodo(state);
  expect(newState.todos.length).toBe(2);
  expect(newState.todos[1].text).toMatch('');
  expect(newState.todos[1].isDone).toBeFalsy();
});

test('handleDeleteTodo', () => {
  const action = deleteTodo({ index: 0 });
  const newState = handleDeleteTodo(state, action);
  expect(newState.todos.length).toBe(0);
});

test('handleUpdateTodo', () => {
  const newText = 'updated todo text';
  const action = updateTodo({ index: 0, text: newText });
  const newState = handleUpdateTodo(state, action);
  expect(newState.todos[0].text).toMatch(newText);
});

test('handleToggleTodo', () => {
  expect(state.todos[0].isDone).toBeFalsy();
  const action = toggleTodo({ index: 0 });
  const newState = handleToggleTodo(state, action);
  expect(newState.todos[0].isDone).toBeTruthy();
});

test('handleSetVisFilter', () => {
  let action = setVisFilter({ filter: VIS_FILTERS.COMPLETE });
  let newState = handleSetVisFilter(state, action);
  expect(newState.visFilter).toMatch(VIS_FILTERS.COMPLETE);

  action = setVisFilter({ filter: VIS_FILTERS.INCOMPLETE });
  newState = handleSetVisFilter(state, action);
  expect(newState.visFilter).toMatch(VIS_FILTERS.INCOMPLETE);
});
