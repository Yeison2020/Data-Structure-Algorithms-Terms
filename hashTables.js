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

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}
