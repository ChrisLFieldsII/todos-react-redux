import {
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  SET_VIS_FILTER,
  TOGGLE_TODO,
} from './actionConstants';

function createTodo() {
  return {
    type: CREATE_TODO,
  };
}

function deleteTodo({ index }) {
  return {
    type: DELETE_TODO,
    data: {
      index,
    },
  };
}

function updateTodo({ index, text }) {
  return {
    type: UPDATE_TODO,
    data: {
      index,
      text,
    },
  };
}

function toggleTodo({ index }) {
  return {
    type: TOGGLE_TODO,
    data: {
      index,
    },
  };
}

function setVisFilter({ filter }) {
  return {
    type: SET_VIS_FILTER,
    data: {
      filter,
    },
  };
}

export { createTodo, deleteTodo, updateTodo, setVisFilter, toggleTodo };
