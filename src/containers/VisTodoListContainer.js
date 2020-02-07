import { connect } from 'react-redux';
import { toggleTodo, updateTodo, deleteTodo } from '../redux';

import { TodoList } from '../comps';
import { getVisTodos } from '../utils';

function mapStateToProps(state) {
  return {
    todos: getVisTodos(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: ({ index }) => dispatch(toggleTodo({ index })),
    updateTodo: ({ index, text }) => dispatch(updateTodo({ index, text })),
    deleteTodo: ({ index }) => dispatch(deleteTodo({ index })),
  };
}

const VisTodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export { VisTodoListContainer };
