import { connect } from 'react-redux';
import { createUser } from '../../actions/user_actions';
import Login from './login';

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user))
});

export default connect(null, mapDispatchToProps)(Login);
