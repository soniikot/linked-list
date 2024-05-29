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

    if (!bucket) {
      this.buckets[hashCode] = [];
      bucket = this.bucket[hashCode];
    }

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

    if (!bucket) {
      return undefined;
    }

    let item = bucket.find((item) => item.key === key);
    return item ? item.value : undefined;
  }
}

/*if (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bound");
      }
    } */

let newHash = new HashMap(16);
console.log(newHash);

newHash.set("Kotova", "Sofia");
newHash.set("Bazovkin", "Vladimir");
newHash.set("Laskin", "Anuita");
console.log(newHash);
