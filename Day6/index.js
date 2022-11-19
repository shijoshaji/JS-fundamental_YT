'use strict';
console.log('day 6');

// foreach, map,filter,find,reduce

const names = ['John', 'Mathew', 'Luke', 'Mark', 'Abraham', 'Issac'];
const people = [
  { uName: 'John', role: 'SDE', age: 25, id: 1, salary: 200 },
  { uName: 'Mathew', role: 'SDE2', age: 25, id: 2, salary: 300 },
  { uName: 'Luke', role: 'SDE4', age: 30, id: 3, salary: 400 },
  { uName: 'Mark', role: 'TL', age: 35, id: 4, salary: 600 },
  { uName: 'Abraham', role: 'Principal Staff', age: 36, id: 5, salary: 800 },
  { uName: 'Issac', role: 'MD', age: 40, id: 5, salary: 1000 },
];

for (let index = 0; index < names.length; index++) {
  const element = names[index];
  console.log(element);
}

for (let ele of names) {
  console.log(ele);
}

//
console.log('*********');
function eachName(item) {
  console.log(item);
}

names.forEach(eachName);
console.log('*********');
names.forEach(function (i) {
  console.log(i);
});

console.log('*********');
people.forEach(function (eachPerson) {
  console.log(eachPerson.uName);
});

// map - return new array - size will be as of array that its derived from

const roles = people.map(function (item) {
  return item.role;
});

console.log('New Array:', roles);

// filter - return new array based on condition

const youngForce = people.filter(function (item) {
  return item.age <= 30;
});

console.log('Young ppl', youngForce);

// find - return new aray based on condtion, good for unique values. first matched value; if no match its undefined

const unique = people.find(function (item) {
  return item.id === 5;
});

console.log('unique', unique);

// reduce - reduces to single value - number,array,object
// always return the first parameter

const total = people.reduce(function (acc, cur) {
  acc += cur.salary;
  return acc;
}, 0);

console.log('total', total);
