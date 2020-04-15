/* eslint-disable no-param-reassign */
const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const lastI = array[i];
    array[i] = array[j];
    array[j] = lastI;
  }
};

export default shuffle;
