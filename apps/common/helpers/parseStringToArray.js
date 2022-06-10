export default (stringInput) => {
  const tags = stringInput.replace(/\n/g, ',').replace(/;/g, ',').split(',');
  let indexTag = 0;
  while (indexTag < tags.length) {
    tags[indexTag] = tags[indexTag].trim();
    indexTag += 1;
  }
  return tags.filter((tag) => tag !== '');
};
