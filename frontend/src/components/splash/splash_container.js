import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  fetchUser: authId => dispatch(fetchUser(authId))
});

export default connect(null, mapDispatchToProps)(Splash);
