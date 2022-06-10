export default (match, statusJSON) => {
  const currentStatus = match?.params?.status || 'Current';
  const statusObj = statusJSON[currentStatus] || statusJSON.Current;
  return { currentStatus, statusObj };
};
