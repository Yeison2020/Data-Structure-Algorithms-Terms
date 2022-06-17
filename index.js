// Basic Reviews

const nemo = ["nemo"];

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

findNemo(nemo);
