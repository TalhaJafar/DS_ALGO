export const frequencyChecker = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  arr1.forEach((element) => {
    if (obj1[element]) {
      obj1[element] = obj1[element] + 1;
    } else {
      obj1[element] = 1;
    }
  });

  arr2.forEach((element) => {
    if (obj2.element) {
      obj2.element = obj2.element + 1;
    } else {
      obj2[element] = 1;
    }
  });

  for (const key in obj1) {
    if (!obj2[key] && obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};
