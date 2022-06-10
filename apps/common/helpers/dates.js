import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/id';
import addCharToString from './addCharToString';

// monthDayYear 'MMMM Do, YYYY'
// monthDayYearAtTime 'MMMM Do, YYYY [at] hh:mm a'

export const parseTimestamp = (timestamp) => {
  const timestampInt = parseInt(timestamp, 10);
  return isNaN(timestampInt) ? timestamp : timestampInt;
};

export const timeago = (timestamp, timezone) => {
  if (timestamp)
    return !timezone
      ? moment(parseTimestamp(timestamp)).fromNow()
      : moment(parseTimestamp(timestamp)).tz(timezone).fromNow();
  return 'Never';
};

export const add = (timestamp, amount, range, timezone) =>
  !timezone
    ? moment(timestamp).add(amount, range).format()
    : moment(timestamp).tz(timezone).add(amount, range).format();

export const year = (timestamp, timezone) =>
  !timezone ? moment(timestamp).format('YYYY') : moment(timestamp).tz(timezone).format('YYYY');

export const iso = (timestamp, timezone, format) => {
  if (!timestamp) return '';
  return moment(parseTimestamp(timestamp))
    .tz(timezone || 'Asia/Jakarta')
    .format(format);
};

export const parseDateToYYYYMMDD = (timestamp, timezone) => {
  if (timestamp)
    return timezone
      ? moment(timestamp).tz(timezone).format('YYYYMMDD')
      : moment(timestamp).format('YYYYMMDD');
  return '';
};

export const parseYYYYMMDDtoDate = (yyyymmdd) => {
  const tgl = isNaN(yyyymmdd) ? yyyymmdd : yyyymmdd.toString();
  return new Date(`${tgl.substring(0, 4)}-${tgl.substring(4, 6)}-${tgl.substring(6)}`);
};

export const countDiffDay = (startDate, endDate, timezone, addDays) => {
  // if startDate or endDate is undefined, it will be now, behaviour of moment
  const fromDate = moment(parseTimestamp(startDate)).tz(timezone);
  const thruDate = moment(parseTimestamp(endDate)).tz(timezone);

  // enforce time to zero because if less than 24 hours diff, it will diff as 0 day
  const fromDateMoment = moment([fromDate.year(), fromDate.month(), fromDate.date()]);
  const thruDateMoment = moment([thruDate.year(), thruDate.month(), thruDate.date()]);

  const diffDay = thruDateMoment.diff(fromDateMoment, 'days');
  return diffDay + (addDays || 0);
};

export const parseFromDateThruDateFromArgs = (args, timezone) => {
  const now = moment(new Date()).tz(timezone);
  // let fromDate = new Date(now.year(), now.month(), 1); toggle this if default is 1st of the month
  let fromDate = new Date(now.year(), now.month(), now.date());
  let thruDate = new Date(now.year(), now.month(), now.date());
  thruDate.setDate(thruDate.getDate() + 1);

  if (args.fromDate) {
    const fromMoment = moment(new Date(args.fromDate)).tz(timezone);
    fromDate = new Date(fromMoment.year(), fromMoment.month(), fromMoment.date());
  }

  if (args.thruDate) {
    const thruMoment = moment(new Date(args.thruDate)).tz(timezone);
    thruDate = new Date(thruMoment.year(), thruMoment.month(), thruMoment.date());
  }

  return { fromDate, thruDate };
};

export const parseFromDateThruDateForQuery = (dateString, local) => {
  const dateSent = new Date(dateString);
  let fromDate;
  let thruDate;

  if (local) {
    // this return 17:00 UTC so that in WIB it is 00:00 to 00:00
    dateSent.setDate(dateSent.getDate() - 1);
    fromDate = `${dateSent.getFullYear()}-${addCharToString(
      2,
      dateSent.getMonth() + 1,
    )}-${dateSent.getDate()}T17:00:00Z`;

    thruDate = `${dateString}T17:00:00Z`;
  } else {
    // this return 00:00 UTC so that in WIB it is 07:00 to 07:00, to workaround work/delivering until date change in WIB
    fromDate = `${dateString}T00:00:00Z`;
    dateSent.setDate(dateSent.getDate() + 1);
    thruDate = `${dateSent.getFullYear()}-${addCharToString(
      2,
      dateSent.getMonth() + 1,
    )}-${dateSent.getDate()}T00:00:00Z`;
  }

  return { fromDate, thruDate };
};
