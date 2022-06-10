import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import { check, Match } from 'meteor/check';

import graphql from './graphql';

// toogle this if needed
import './fixtures_User';
import './fixtures_Org';
import './fixtures_Tenant';
import './fixtures_UserSetting';

// common
import '../apps/common/startup/server';

import './accounts';
import './browserPolicy';
import './email';
import './files';
import './slingshot';

import './ssr';

// toggle this if you want cron
import './cronjobs';

Meteor.users.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Meteor.users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Match.TextOnly = Match.Where((text) => {
  check(text, String);
  return /^[a-zA-Z0-9\s\d./-]*$/.test(text);
});

graphql(WebApp.connectHandlers);

// Publish all role-assignments
// eslint-disable-next-line consistent-return
Meteor.publish(null, function publishRole() {
  if (this.userId) {
    return Meteor.roleAssignment.find({ 'user._id': this.userId });
  }
  this.ready();
});

Meteor.startup(() => {
  console.info('server ready');
});
