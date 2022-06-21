// Array Data Structures
const arr = ["a", "b", "c", "d"];
console.log(arr[3]);

arr.push("Enmanuel");
console.log(arr);

arr.shift("Quiterios");
arr.unshift("Casado");
arr.splice(2, 0, "Alien");
arr.console.log(arr);

// Types of Array Statics and Dynamic

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
}

const newArray = new myArray();
console.log(newArray);
