import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    border: '1px solid black',
    padding: 20,
  },
};

function getTotalNumLetters(todos) {
  return todos.reduce((accum, todo) => {
    accum += todo.text.length;
    return accum;
  }, 0);
}

function getTotalNumWords(todos) {
  return todos.reduce((accum, todo) => {
    if (!todo.text) return accum;

    const wordsArr = todo.text.trim().split(/\s/);
    accum += wordsArr.length;
    return accum;
  }, 0);
}

function getTotalCompleteTodos(todos) {
  return todos.filter(todo => todo.isDone).length;
}

function getTotalIncompleteTodos(todos) {
  return todos.length - getTotalCompleteTodos(todos);
}

function Footer({ todos }) {
  return (
    <footer style={styles.container}>
      <p>{`Total # of Todos: ${todos.length}`}</p>
      <p>{`Total # Complete Todos: ${getTotalCompleteTodos(todos)}`}</p>
      <p>{`Total # Incomplete Todos: ${getTotalIncompleteTodos(todos)}`}</p>
      <p>{`Total # of Letters: ${getTotalNumLetters(todos)}`}</p>
      <p>{`Total # of Words: ${getTotalNumWords(todos)}`}</p>
    </footer>
  );
}

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
};

export { Footer };
