'use strict';
console.log('day 6');

// foreach, map,filter,find,reduce

const names = ['John', 'Mathew', 'Luke', 'Mark', 'Abraham', 'Issac'];
const people = [
  { uName: 'John', role: 'SDE' },
  { uName: 'Mathew', role: 'SDE2' },
  { uName: 'Luke', role: 'SDE4' },
  { uName: 'Mark', role: 'TL' },
  { uName: 'Abraham', role: 'Principal Staff' },
  { uName: 'Issac', role: 'MD' },
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

// map - return new array

const roles = people.map(function (item) {
  return item.role;
});

console.log('New Array:', roles);
