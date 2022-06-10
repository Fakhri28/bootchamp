export default (context) => {
  return {
    _id: (context.user && context.user._id) || 'Anonymous',
    type: context.user && context.user._id ? 'Member' : 'Anonymous',
    name:
      context.user && context.user.profile && context.user.profile.fullname
        ? context.user.profile.fullname
        : 'Anonymous',
  };
};
