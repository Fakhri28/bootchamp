import { Meteor } from 'meteor/meteor';

const getUserAsParty = (_id) => {
  if (!_id) return undefined;
  const user = Meteor.users.findOne(
    { _id },
    { fields: { 'profile.fullname': 1, 'profile.shortname': 1, 'profile.Image_User_PP': 1 } },
  );
  if (!user) return undefined;
  return {
    _id,
    name: user.profile.fullname,
    shortname: user.profile.shortname,
    logoUrl: user.profile.Image_User_PP || Meteor.settings.public.default.logoUrl,
    type: 'Member',
  };
};

export default getUserAsParty;
