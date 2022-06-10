import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Counts } from 'meteor/ros:publish-counts';

import getJSONdefs from '../../utils/getJSONdefs';
import getQueryAndProjectionForRootAdmin from '../../../../../helpers/getQueryAndProjectionForRootAdmin';

import Org from '../..';

const publishName = 'listOrgHistoryAll';
Meteor.publish(publishName, function pub(props) {
  check(props, Object);
  try {
    const { query, projection } = getQueryAndProjectionForRootAdmin(
      publishName,
      props,
      getJSONdefs,
    );

    Counts.publish(this, `${publishName}Count`, Org.find(query), { fastCount: true });

    return Org.find(query, projection);
  } catch (exception) {
    console.error(`PUBLISH EXCEPTION - ${publishName} - userId: ${Meteor.userId()}`, exception);
    return this.ready();
  }
});
