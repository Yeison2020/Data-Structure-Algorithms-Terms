// Here Get the first recurrent Character
// Meaning The number that gets repeated first in the Array

// 1.
const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];

const findRepeatedNum = (arr) => {
  if (arr.length < 2) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
};

// Should return 2

// 2.

const arr1 = [2, 1, 1, 2, 3, 5, 1, 2, 4];

// Should return 1

// 3.

const arr2 = [2, 3, 4, 5];

// should return undefined, because We do not have repeated Numbers
