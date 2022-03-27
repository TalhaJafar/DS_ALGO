const zeroSumPair = (array) => {
  if (array.length === 0) {
    return false;
  }
  let firstIndex = 0;
  let secondIndex = array.length - 1;

  while (firstIndex < secondIndex) {
    const sum = array[firstIndex] + array[secondIndex];
    if (sum === 0) {
      return [array[firstIndex], array[secondIndex]];
    } else if (sum > 0) {
      secondIndex = secondIndex - 1;
    } else if (sum < 0) {
      firstIndex = firstIndex + 1;
    }
  }
  return false;
};

export default zeroSumPair;
