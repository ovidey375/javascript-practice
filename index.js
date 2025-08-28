// const expect = (val) => {
//   return {
//     toBe: function (val1) {
//       if (val === val1) {
//         return console.log("True");
//       } else {
//         return console.log("Not equal");
//       }
//     },
//     notToBe: function (val2) {
//       if (val2 !== val) {
//         console.log("True");
//       } else {
//         return console.log("Equal");
//       }
//     },
//   };
// };
// expect(12).toBe(1)
// expect(1).notToBe(2);

// const createCounter = (init) => {
//   let curVal = init;
//   return {
//     increment: () => {
//       return ++curVal;
//     },
//     decrement: () => {
//       return --curVal;
//     },
//     reset: () => {
//       curVal = init;
//       return curVal;
//     },
//   };
// };
// const counter = createCounter(5);
// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// const map = (arr, fn) => {
//   let newArr = [];
//   arr.forEach((value, index) => {
//     return newArr.push(fn(value, index));
//   });
//   return newArr;
// };
// const arr = [10, 20, 30];
// const fn = (value, index) => value - index;

// const output = map(arr, fn);
// console.log(output);

// const filter = (arr, fn) => {
//   let newArr = [];
//   arr.forEach((value, index) => {
//     if (fn(value, index)) {
//       newArr.push(value);
//     }
//   });
//   return newArr;
// };

// var reduce = function (nums, fn, init) {
//   let a = 0;
//   for (let i = 0; i < nums.length; i++) {
//     a = fn(init, nums[i]);
//     init = a;
//   }
//   return init;
// };
// nums = [1, 2, 3, 4];
// fn = function sum(accum, curr) {
//   return accum + curr * curr;
// };
// init = 100;
// const result = fn();
// console.log(fn);

// let i = 1;
// while (i <= 10) {
//   console.log(`the result of this loop is ${i}`);
//   i++;
// }

// async function sleeps(millis) {
//   await new Promise((res) => {
//     setTimeout(() => {
//       res();
//       return millis;
//     }, millis);
//   });
// }
// let t = Date.now();
// sleeps(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// var cancellable = function (fn, args, t) {
//   const timeoutId = setTimeout(() => {
//     fn(...args);
//   }, t);

//   const cancelFn = () => {
//     clearTimeout(timeoutId);
//   };
//   return cancelFn;
// };
//***Example of Prototype***
function createUser(name, age) {
  this.name = name;
  this.age = age;
}

createUser.prototype.getDetails = function () {
  console.log(`User name is ${this.name} & age is ${this.age}`);
};

const user1 = new createUser("avi", 45);
user1.getDetails();
const user2 = new createUser("sayn", 27);
user2.getDetails();

// const arr = [2, 4, 5, 56, 3, 2, 5];
// console.log(arr.toString())
// console.log(arr.push(0));
// console.log(arr.unshift(66));
// console.log(arr.reverse());
// console.log(delete arr[2]);
// const sliceArr = arr.slice(0, 3);
// console.log(sliceArr);
// console.log(arr);
// arr.length = 3;
// console.log(arr);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
// fruits.splice(2, 2, "Lemon", "Kiwi");
// console.log(fruits);

// const newArr=new Set(arr)
// console.log(newArr);

const users = [
  { name: "Ava", status: "active", age: 28, location: "Mumbai" },
  { name: "Leo", status: "inactive", age: 31, location: "Delhi" },
  { name: "Mia", status: "active", age: 25, location: "Chennai" },
];

const filterUsers = users
  .filter(({ status }) => status === "active")
  .map(({ name, ...details }) => {
    return { name, details };
  });

// console.log(filterUsers);
// console.log(users);

// console.log(Math.floor(Math.random() * 10));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
