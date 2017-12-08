import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import Login from './login';

// const mapStateToProps = state => ({
//   tasks: Object.values(state.entities.tasks)
// });

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
});

export default connect(null, mapDispatchToProps)(Login);
