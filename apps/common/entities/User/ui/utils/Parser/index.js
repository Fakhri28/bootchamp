import parseDocs from '../../../../../helpers/parseDocs';
import { iso, timeago } from '../../../../../helpers/dates';
import parseHost from '../../../../../helpers/parseHost';
import parseDotToUnderscore from '../../../../../helpers/parseDotToUnderscore';

const Index = (docs, settings, roles) => {
  const parsedDocs = parseDocs(docs, [
    { from: '_id', to: '_id' },
    { from: (doc) => doc.profile && doc.profile.fullname, to: 'fullname' },
    {
      from: (doc) => doc.emails && doc.emails[0] && doc.emails[0].address,
      to: 'email',
    },
    {
      from: (doc) => {
        const emailVerified =
          doc.emails && doc.emails[0] && doc.emails[0].verified
            ? 'Email Verified'
            : 'Email Not Verified';
        const idUploaded =
          doc.profile && doc.profile.Image_User_IDCard ? 'ID Uploaded' : 'ID Not Uploaded';
        return `${emailVerified}/${idUploaded}`;
      },
      to: 'Verification',
    },
    { from: (doc) => doc.profile && doc.profile.phone, to: 'phone' },
    {
      from: (doc) => {
        const status = doc.status && doc.status.online ? 'Online' : 'Offline';
        const idle = doc.status && doc.status.idle ? 'Idle' : 'Active';
        return `${status}${status === 'Online' ? `_${idle}` : ''}`;
      },
      to: 'status',
    },
    {
      from: (doc) => {
        const host = parseDotToUnderscore(parseHost(window.location.hostname));
        const hostVisitLastTimestamp =
          doc.hosts &&
          doc.hosts[host] &&
          doc.hosts[host].visit &&
          doc.hosts[host].visit.last &&
          doc.hosts[host].visit.last.timestamp;
        return iso(hostVisitLastTimestamp, settings.timezone, 'LLLL');
      },
      to: 'hostLastLogin',
    },
    {
      from: (doc) => {
        const lastLogin = doc.status && doc.status.lastLogin && doc.status.lastLogin.date;
        return timeago(lastLogin, settings.timezone);
      },
      to: 'allLastLogin',
    },
    {
      from: (doc) => `/User/${doc._id}`,
      to: 'linkUrl',
    },
  ]);

  return roles && roles.indexOf('root') < 0
    ? parsedDocs.map((parsedDoc) => {
        const doc = { ...parsedDoc };
        delete doc.allLastLogin;
        return doc;
      })
    : parsedDocs;
};

export default Index;
