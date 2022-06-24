let user = {
  age: 26,
  name: "Yeison",
  magic: true,
  screa: function () {
    console.log("HAHAHAHAH");
  },
};

user.scream();
user.spell = "Enmanuel";
console.log(user);

// Hash tables can cuase a lot collitions and slows down our ability to insert a retrive information

/// HASH TABLES CLASS

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  // Important Notes here: The _hash is creating the address where we can retrive the this.data that contains my key, values
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
      console.log(this.data);
    } else {
      // Here We avoid the collition and the memory space will not be compromise
      this.data[address].push([key, value]);
    }
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } else {
      return undefined;
    }
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        console.log(this.data[i]);
        keysArray.push(this.data[i][0]);
      }
    }
    return keysArray;
  }
}

const myhasTable = new HashTable(50);
myhasTable.set("Grapes", 20);
