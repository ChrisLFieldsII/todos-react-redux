import {
  VIS_FILTERS,
  SET_VIS_FILTER,
  CREATE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from './actionConstants';
import { Todo } from './models';

const initState = {
  todos: [],
  visFilter: VIS_FILTERS.ALL,
};

function handleCreateTodo(state) {
  const newTodo = new Todo();
  return {
    ...state,
    todos: state.todos.concat(newTodo),
  };
}

function handleDeleteTodo(state, action) {
  const { index } = action.data;
  const copyTodos = state.todos.slice();
  copyTodos.splice(index, 1);
  return {
    ...state,
    todos: copyTodos,
  };
}

function handleUpdateTodo(state, action) {
  const { index, text } = action.data;
  const copyTodos = state.todos.slice();
  copyTodos[index].text = text;
  return {
    ...state,
    todos: copyTodos,
  };
}

function handleToggleTodo(state, action) {
  const { index } = action.data;
  const copyTodos = state.todos.slice();
  copyTodos[index].isDone = !copyTodos[index].isDone;
  return {
    ...state,
    todos: copyTodos,
  };
}

function handleSetVisFilter(state, action) {
  return {
    ...state,
    visFilter: action.data.filter,
  };
}

const todoAppActionHandler = {
  [CREATE_TODO]: handleCreateTodo,
  [UPDATE_TODO]: handleUpdateTodo,
  [DELETE_TODO]: handleDeleteTodo,
  [TOGGLE_TODO]: handleToggleTodo,
  [SET_VIS_FILTER]: handleSetVisFilter,
};

function TodoApp(state = initState, action) {
  if (!todoAppActionHandler[action.type]) return state;

  return todoAppActionHandler[action.type](state, action);
}

export {
  TodoApp,
  handleCreateTodo,
  handleDeleteTodo,
  handleSetVisFilter,
  handleToggleTodo,
  handleUpdateTodo,
};
