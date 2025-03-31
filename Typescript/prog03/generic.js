"use strict";
// Generics in TypeScript allow you to create reusable, type-safe components that work with multiple data types without losing type information.
class storageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const names = new storageContainer();
names.addItem("Sudip");
console.log(names.getItem(0));
