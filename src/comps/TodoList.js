import React from 'react';
import PropTypes from 'prop-types';

import { Todo } from './Todo';

function TodoList({ todos, toggleTodo, updateTodo, deleteTodo }) {
  if (!todos.length) {
    return <h2>Create a Todo!</h2>;
  }

  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Todo
            key={todo.id}
            isDone={todo.isDone}
            text={todo.text}
            index={index}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export { TodoList };
