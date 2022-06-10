import { Counts } from 'meteor/ros:publish-counts';

import getQueryAndProjection from './getQueryAndProjection';
import getFieldsByDef from '../getFieldsByDef';

const pubProcessor = (Entity, publishName, getJSONdefs, props, parent, additionalCounts) => {
  const { query, projection } = getQueryAndProjection(publishName, getJSONdefs, props, parent);

  Counts.publish(parent, `${publishName}Count`, Entity.find(query, { fields: getFieldsByDef() }), {
    fastCount: true,
  });

  if (additionalCounts)
    additionalCounts.forEach((additionalCount) => {
      const queryAdditional = {
        ...query,
        ...additionalCount.query,
      };
      Counts.publish(
        parent,
        `${publishName}_${additionalCount.name}_Count`,
        Entity.find(queryAdditional),
        { fastCount: true },
      );
    });

  // console.info('query', query);

  return Entity.find(query, projection);
};

export default pubProcessor;
