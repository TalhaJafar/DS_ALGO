const array_unique_count = (array) => {
  //return number of unique values in the array

  if (array.length === 0) {
    return 0;
  }

  let pointer1 = 0;
  array.forEach((element, pointer2) => {
    if (array[pointer1] !== element && pointer2 !== 0) {
      pointer1++;
      array[pointer1] = element;
    }
  });
  return pointer1 + 1;
};

export default array_unique_count;
