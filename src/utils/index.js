import { VIS_FILTERS } from '../redux';

function getVisTodos({ todos, visFilter }) {
  switch (visFilter) {
    case VIS_FILTERS.ALL:
      return todos;
    case VIS_FILTERS.COMPLETE:
      return todos.filter(todo => todo.isDone);
    case VIS_FILTERS.INCOMPLETE:
      return todos.filter(todo => !todo.isDone);
    default:
      return todos;
  }
}

export { getVisTodos };
