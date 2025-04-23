class HashMap {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    this.map[key] = value;
  }

  get(key) {
    if (this.map.hasOwnProperty(key)) {
      return this.map[key];
    }
    return "not found";
  }
}

const myHashMap = new HashMap();
console.log(myHashMap.set("name", "dipty"));
console.log(myHashMap.get("name"));
console.log(myHashMap);
