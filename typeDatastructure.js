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

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new myArray();
newArray.push("Hello");
newArray.delete();

console.log(newArray);
