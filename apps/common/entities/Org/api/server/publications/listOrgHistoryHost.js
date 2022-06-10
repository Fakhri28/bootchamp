import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import Org from '../../index';

import getJSONdefs from '../../utils/getJSONdefs';
import pubProcessorOrgByHost from '../../utils/pubProcessorOrgByHost';

const publishName = 'listOrgHistoryHost';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    return pubProcessorOrgByHost(Org, publishName, getJSONdefs, props, this);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
