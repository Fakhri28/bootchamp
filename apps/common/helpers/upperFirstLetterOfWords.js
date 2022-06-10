import _ from 'lodash';

const upperFirstLetterOfWords = (sentence) => {
  if (!sentence || sentence === '') return sentence;
  const words = sentence.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    words[i] = _.upperFirst(words[i]);
  }
  return words.join(' ');
};

export default upperFirstLetterOfWords;
