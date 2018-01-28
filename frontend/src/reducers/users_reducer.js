import * as UserActions from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UserActions.RECEIVE_USER:
      let newUser = Object.assign({}, action.user);
      delete newUser['session_token'];
      return newUser;
    default:
      return state;
  }
};

export default UserReducer;
