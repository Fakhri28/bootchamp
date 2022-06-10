import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import pubProcessor from '../../../../../../common/helpers/server/pubProcessor';

import Contoh from '../..';
import getContohJSONdefs from '../../utils/getJSONdefs';

const publishName = 'listContohProcessing';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    return pubProcessor(Contoh, publishName, getContohJSONdefs, props, this);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
