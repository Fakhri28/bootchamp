import sanitizeString from '../../../../../../common/helpers/server/sanitizeString';

const parseArgs = (args, settings, docOld) => {
  const { maximumFractionDigits } = settings;

  const doc = sanitizeString(args);

  doc.amount =
    (doc.amount && +doc.amount.toFixed(maximumFractionDigits)) || (docOld && docOld.amount); // use this to make sure a field is always has value and not accidentally has undefined as new value
  doc.contohDate = (doc.contohDate && new Date(doc.contohDate)) || (docOld && docOld.contohDate); // beware though it is only for field that must be filled in

  return doc;
};

export default parseArgs;
