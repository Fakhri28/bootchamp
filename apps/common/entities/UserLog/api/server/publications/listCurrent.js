import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import pubProcessor from '../../../../../helpers/server/pubProcessor';

import UserLog from '../..';
import getUserLogJSONdefs from '../../utils/getJSONdefs';

const publishName = 'listUserLogCurrent';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    return pubProcessor(UserLog, publishName, getUserLogJSONdefs, props, this);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
