let id: number = 5;
let str: string = "I am sudip";
let ids: number[] = [1, 2, 3, 4, 5];
let mult: any[] = ["hello", "gintoki", "Php"];

// Attaching a string on the function will make it return only string other type of data cannot be returned
const concatinate = (a: string, b: string): string => {
  return a + b;
};

// console.log(concatinate("Hello"," Bro"));

// Interface blueprint for objects
interface UserInterface {
  id: number;
  name: string;
  age?: number; //? makes the age optional otherwise it will be required
  greet(message: string): void; //that's how we make a func in interface
}

const userOne: UserInterface = {
  id: 2,
  name: "Sudip",
  age: 19,
  greet(message) {
    console.log(message);
  },
};

// console.log(userOne.name)
// userOne.greet("Yahello");