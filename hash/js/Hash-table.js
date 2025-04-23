class HashTable {
  constructor(value) {
    this.hashTable = new Array(value);
    this.size = value;
  }

  hashFun(value) {
    const str = value + "";
    let sum = 0;

    for (let index = 0; index < str.length; index++) {
      sum += str[index].charCodeAt();
    }

    return sum % this.size;
  }

  set(value) {
    const index = this.hashFun(value);

    if (!Array.isArray(this.hashTable[index])) {
      this.hashTable[index] = [value];
    } else {
      this.hashTable[index].push(value);
    }
  }

  get(value) {
    const index = this.hashFun(value);
    const indexedArr = this.hashTable[index] || [];

    for (let index = 0; index < indexedArr.length; index++) {
      if (indexedArr[index] === value) {
        return `${value} found`;
      }
    }

    return `${value} not found`;
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.hashTable[i]) {
        console.log(`Index ${i}:`, this.hashTable[i]);
      }
    }
  }

}

const myHashTable = new HashTable(5);
console.log(myHashTable.hashFun(10));
console.log(myHashTable.set(10));
console.log(myHashTable.set(10));
console.log(myHashTable.set("auu"));
console.log(myHashTable.get("gg"));
console.log(myHashTable.display());
