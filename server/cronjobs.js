import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/littledata:synced-cron';

SyncedCron.config({
  log: false,
  utc: true,
});

// SyncedCron.add({
//   name: '[ Common ] cron common',
//   schedule(parser) {
//     return parser.text('at 00:00');
//   },
//   job(intendedAt) {
//     console.log(`[ ETHOS ] at 00:00 UTC: ${intendedAt}`);
//   },
// });

// SyncedCron.add({
//   name: '[ ETHOS ] Journal Queue Processing',
//   schedule(parser) {
//     return parser.text('every 10 seconds');
//   },
//   job(intendedAt) {
//     processJournalQueueToActive(
//       {
//         context: {
//           headers: {
//             origin: 'ethos.maya',
//           },
//           user: {
//             _id: 't5uNFqTdyqc9WZ2qN', // FIXME bikin id khusus buat cron
//             profile: {
//               fullname: 'Cron',
//               shortname: 'Cron',
//               type: 'Cron',
//             },
//           },
//         },
//       },
//       intendedAt,
//     );
//   },
// });

Meteor.startup(() => {
  SyncedCron.start();
});
