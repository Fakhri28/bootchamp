import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import pubProcessor from '../../../../../helpers/server/pubProcessor';

import UserSetting from '../..';
import getUserSettingJSONdefs from '../../utils/getJSONdefs';

const publishName = 'listUserSettingHistory';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    return pubProcessor(UserSetting, publishName, getUserSettingJSONdefs, props, this);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
