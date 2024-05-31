export class HashMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.buckets = new Array(capacity).fill(null).map(() => []);
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.capacity;
  }

  set(key, value) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];

    let item = bucket.find((item) => item.key === key);
    if (item) {
      item.value = value;
    } else {
      bucket.push({ key, value });
    }
  }

  get(key) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];

    let item = bucket.find((item) => item.key === key);
    return item ? item.value : undefined;
  }

  has(key) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];

    let item = bucket.find((item) => item.key === key);
    return !!item; // Return true if item is found, otherwise false
  }
}

/*if (index < 0 || index >= buckets.length) {
          throw new Error("Trying to access index out of bound");
        }
      } */

let newHash = new HashMap(16);

newHash.set("Kotova", "Sofia");
newHash.set("Bazovkin", "Vladimir");
newHash.set("Laskin", "Anuita");
newHash.set("Katya", "Vasilieva");

console.log(newHash);

console.log(newHash.has("Bazovkin"));
