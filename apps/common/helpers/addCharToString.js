const addCharToString = (charQty, inputString, inputChar) => {
  let resultString = inputString?.toString() || '';
  let diffDigit = charQty - resultString.length;
  while (diffDigit > 0) {
    resultString = `${inputChar || '0'}${resultString}`;
    diffDigit -= 1;
  }
  return resultString;
};

export default addCharToString;
