const name = "nosiey";

// FUNCTION SOLVED
function reverseSt(string) {
  // Check array steps

  // 1.  undefined and length < 2 || typeof string !== 'string'

  if (!string || string.length < 2 || typeof string !== "string") {
    return "that no good";
  }
  // Creating constant to store Values;
  const backwards = [];
  const itemsTotal = string.length - 1;
  for (let i = itemsTotal; i >= 0; i--) {
    backwards.push(string[i]);
  }
  console.log(backwards);
  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => str.split("").reverse().join("");

const reverse4 = (string) => [...string].reverse().join("");

/// Merging Sorted Array
// Implementing a Merge and sort Array
const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

function mergeSortedArray(arr1, arr2) {
  // Always check array length ,  typeof and If one array empty return first array sorted If not sorted already
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }
  const allSortedArray = arr1.concat(arr2);
  allSortedArray.sort((a, b) => a - b);
  return allSortedArray;
}

// Version Two merging and sorting arrays

function arrayValue(arr1, arr2) {
  const mergeArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 0;
  let j = 1;
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (array1Item || array2Item) {
    if (array1Item > array2Item) {
      mergeArray.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  return mergeArray;
}
