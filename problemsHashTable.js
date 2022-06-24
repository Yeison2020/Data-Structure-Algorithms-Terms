// Here Get the first recurrent Character
// Meaning The number that gets repeated first in the Array

// 1.
const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];

const findRepeatedNum = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
};

// Should return 2

// 2.

const arr1 = [2, 1, 1, 2, 3, 5, 1, 2, 4];

// Should return 1

// 3.

const arr2 = [2, 3, 4, 5];

// should return undefined, because We do not have repeated Numbers
