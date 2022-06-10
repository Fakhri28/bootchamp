import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import pubProcessor from '../../../../../helpers/server/pubProcessor';

import Notification from '../..';
import getNotificationJSONdefs from '../../utils/getJSONdefs';

const publishName = 'listNotificationDraft';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    return pubProcessor(Notification, publishName, getNotificationJSONdefs, props, this);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
