// Basic Reviews

const nemo = [
  "nemo",
  "dory",
  "Yeison",
  "Enmanuel",
  "Louders",
  "Wilmin",
  "Deivi",
  "Papi",
];

const largerArr = new Array(100).fill(nemo);

const findNemo = (arr) => {
  // Measuring Performance

  let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "nemo") {
      console.log("Found nemo");
    }
  }
  let t1 = performance.now();
  console.log(`Call to find nemo took ${t0 - t1} milliseconds`);
};

findNemo(largerArr);

// Big O o(n) -- Linear time meaning the
const boxe1 = [1, 2, 3, 4, 5, 6];

// The entire funtion will run O(2), because Its handling two operations from the array.
function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}
