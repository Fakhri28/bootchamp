import { Roles } from 'meteor/alanning:roles';

const checkAuth = (user, roles, scope) => {
  try {
    if (!user) throw new Error('No user in param!!!');
    if (!roles || roles.length < 1) throw new Error('No roles in param!!!');
    if (!Roles.userIsInRole(user._id, [...roles, 'admin'], scope)) throw new Error('No access!!!');
  } catch (exception) {
    throw new Error(`[checkAuth] ${exception.message}`);
  }
};

export default checkAuth;
