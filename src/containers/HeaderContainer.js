import { connect } from 'react-redux';

import { Header } from '../comps';
import { setVisFilter, createTodo } from '../redux';

function mapStateToProps(state) {
  return {
    visFilter: state.visFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setVisFilter: ({ filter }) => dispatch(setVisFilter({ filter })),
    createTodo: () => dispatch(createTodo()),
  };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export { HeaderContainer };
