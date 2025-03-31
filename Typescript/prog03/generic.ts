// Generics in TypeScript allow you to create reusable, type-safe components that work with multiple data types without losing type information.

class storageContainer<T> {
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  addItem(item: T): void {
    this.contents.push(item);
  }
  getItem(idx: number): T | undefined {
    return this.contents[idx];
  }
}

const names = new storageContainer<string>();
names.addItem("Sudip");
console.log(names.getItem(0));