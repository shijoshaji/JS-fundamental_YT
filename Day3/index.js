console.log('Welcome to Day 3');

let myName = '  Shijo Shaji  ';

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.charAt(myName.length - 1));
console.log(myName.indexOf('a'));
console.log(myName.trim()); // removes white space at head and trial

console.log(myName.startsWith('Shi'));

// since we have white space and we checking with lower case in starswith we may always get false even thou it exists so lets do as below

console.log(myName.trim().toLowerCase().startsWith('shi'));

console.log(myName.includes('sha')); // again case sensitive so lets convert and test as below
console.log(myName.toLowerCase().includes('sha'));
let withoutSpaces = myName.trim();
console.log(withoutSpaces.slice(0, 4));
console.log(withoutSpaces.split(' '));

//
const fruits = ['Zfruit', 'Apple', 'Mango', 'Grape', 'Watermelon', 'Banana'];
const fewMoreFruits = ['Drangon fruit', 'Soppota', 'Pineapple'];

console.log(fruits.length);

console.log(fruits);
console.log(fewMoreFruits);

// lets get into new array both
let newArrFruits = fruits.concat(fewMoreFruits);
console.log(newArrFruits);

// reverse array
console.log(newArrFruits.reverse());

// sort
console.log('SORT', newArrFruits.sort());

// add item in begining of array
newArrFruits.unshift('NewFirstfruit');
console.log(newArrFruits);

// remove first item
newArrFruits.shift();
newArrFruits.shift();
console.log(newArrFruits);

// add item at end of array
newArrFruits.push('NewLastfruit');
console.log(newArrFruits);

// remove last item
newArrFruits.pop();
console.log(newArrFruits);

// splice - it mutates original array
let usingSpliceArr = newArrFruits.splice(2, 3);

console.log(newArrFruits);
console.log(usingSpliceArr);
