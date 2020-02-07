import { connect } from 'react-redux';

import { Footer } from '../comps';
import { getVisTodos } from '../utils';

function mapStateToProps(state) {
  return {
    todos: getVisTodos(state),
  };
}

const FooterContainer = connect(mapStateToProps)(Footer);

export { FooterContainer };
