import * as UserActions from '../actions/user_actions';

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UserActions.RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UsersReducer;
