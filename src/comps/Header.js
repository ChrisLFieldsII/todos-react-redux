import React from 'react';
import PropTypes from 'prop-types';

import { VIS_FILTERS } from '../redux';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    margin: 10,
  },
};

function Header({ visFilter, setVisFilter, createTodo }) {
  return (
    <header style={styles.header}>
      <h1>React-Redux Todos</h1>
      <div style={styles.container}>
        <span>Filter: </span>
        <select
          value={visFilter}
          onChange={e => setVisFilter({ filter: e.target.value })}
          style={styles.action}
        >
          {Object.keys(VIS_FILTERS).map(filter => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>

        <button type="button" style={styles.action} onClick={createTodo}>
          Create
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  visFilter: PropTypes.string.isRequired,
  setVisFilter: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
};

export { Header };
