"use strict";
let id = 5;
let str = "I am sudip";
let ids = [1, 2, 3, 4, 5];
let mult = ["hello", "gintoki", "Php"];
// Attaching a string on the function will make it return only string other type of data cannot be returned
const concatinate = (a, b) => {
    return a + b;
};
const userOne = {
    id: 2,
    name: "Sudip",
    age: 19,
    greet(message) {
        console.log(message);
    },
};
// console.log(userOne.name)
// userOne.greet("Yahello");
