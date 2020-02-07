import React from 'react';
import PropTypes from 'prop-types';

function Todo({ toggleTodo, isDone, text, updateTodo, index, deleteTodo }) {
  return (
    <li>
      <span>{`#${index + 1} |`}</span>
      <input
        type="checkbox"
        checked={isDone}
        onChange={e => toggleTodo({ index })}
      />
      <input
        type="text"
        size={200}
        style={{ margin: 5, padding: 5 }}
        value={text}
        onChange={e => updateTodo({ index, text: e.target.value })}
        placeholder="Enter some text describing this Todo"
      />
      <button
        type="button"
        style={{ margin: 5 }}
        onClick={() => deleteTodo({ index })}
      >
        Delete
      </button>
    </li>
  );
}

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  updateTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export { Todo };
