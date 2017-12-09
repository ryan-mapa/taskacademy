import * as UserActions from '../actions/user_actions';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  console.log('inside users reducer', action);
  switch (action.type) {
    case UserActions.RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;
