import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const createUser = user => dispatch => (
  UserApiUtil.postUser(user)
             .then(newUser => dispatch(receiveUser(newUser.data)))
);

export const fetchUser = authId => dispatch => (
  UserApiUtil.getUser(authId)
             .then(user => dispatch(receiveUser(user.data)))
);
