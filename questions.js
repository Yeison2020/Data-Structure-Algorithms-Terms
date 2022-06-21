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
