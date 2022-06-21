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
  const allSortedArray = arr1.concat(arr2);
  allSortedArray.sort((a, b) => a - b);
  return allSortedArray;
}
