'use strict';
console.log('day 5');
const globalVal = 5;

function addNum(a, b) {
  return a + b + globalVal;
}

let v = addNum(1, 2);
console.log(v);

// callbacks topic

function morningMsg(name) {
  return `Good Morning ${name}`;
}
function afternoonMsg(name) {
  return `Good AfterNoon ${name}`;
}

function nightMsg(name) {
  return `Good Night ${name}`;
}

function greet(userName, cb) {
  // cb is callback reference
  var msg = cb(userName);
  const myName = 'Shijo';
  console.log(`Hi ${msg}!!! \n My name is ${myName}`);
}

greet('Ram', morningMsg);
greet('Ram', afternoonMsg);
greet('John', nightMsg);
