import { LinkedList } from "./linkedList.mjs";

export class HashMap {
  constructor(capacity) {
    this.capacity = capacity;
    this.buckets = Array.from({ length: capacity }, () => new LinkedList());
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

    let item = bucket.find(key);
    if (item) {
      item.value = value;
    } else {
      bucket.append({ key, value });
    }
  }

  get(key) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];

    let item = bucket.find(key);
    return item ? item.value : undefined;
  }

  has(key) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];

    let item = bucket.find(key);
    return !!item;
  }

  remove(key) {
    let hashCode = this.hash(key);
    let bucket = this.buckets[hashCode];

    return bucket.pop(key);
  }

  length() {
    let count = 0;
    for (let bucket of this.buckets) {
      if (bucket.head !== null) {
        let currentNode = bucket.head;
        while (currentNode) {
          count++;
          currentNode = currentNode.nextNode;
        }
      }
    }
    return count;
  }

  clear() {
    for (let bucket of this.buckets) {
      if (bucket.head !== null) {
        bucket.pop();
      }
    }
  }

  keys() {
    let arrayOfKeys = [];
    this.buckets.forEach((bucket) => {
      if (bucket.head) {
        arrayOfKeys.push(bucket.head.value.key);
      } else {
      }
    });
    return arrayOfKeys;
  }

  values() {
    let arrayOfValues = [];
    this.buckets.forEach((bucket) => {
      if (bucket.head) {
        arrayOfKeys.push(bucket.head.value.value);
      } else {
      }
    });
    return arrayOfValues;
  }

  entries() {
    let arrayOfEntries = [];
    this.buckets.forEach((bucket) => {
      if (bucket.head) {
        arrayOfEntries.push(bucket.head.value);
      } else {
      }
    });
    return arrayOfEntries;
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

console.log(newHash.entries());
console.log(newHash);
