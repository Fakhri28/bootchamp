import { Meteor } from 'meteor/meteor';

const getUserOrgIds = (userId, authOrg, host) => {
  const userOrgs = Meteor.roleAssignment
    .find({
      'role._id': { $in: authOrg },
      scope: new RegExp(`.org.${host}`),
      'user._id': userId,
    })
    .fetch();
  if (!userOrgs || userOrgs.length < 1) throw new Error('User does not have org');
  return [
    ...new Set(
      userOrgs.map((userOrg) => userOrg.scope.substring(0, userOrg.scope.indexOf('.org'))),
    ),
  ];
};

export default getUserOrgIds;
