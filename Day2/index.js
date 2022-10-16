console.log('Day 2');

// NOTE - implicit type conversion

const fname = 'Shijo';
const lname = 'shaji';
const fullName = fname + ' ' + lname;
console.log(fullName); //shijo shaji

const a = 10;
const b = 20;
console.log(a + b); // 30

const aa = '10';
const bb = '20';
console.log(aa + bb); // 1020
console.log(aa - bb); // -10

console.log(fname - lname); // NaN

console.log(typeof fullName);

// NOTE - Arrays

const fruits = ['Apple', 'Mango', 'Grape', 'Watermelon'];
console.log(fruits);
// access value in array
console.log(fruits[1]); //index starts from 0
// length of array
console.log(fruits.length);
fruits[1] = 'New Mango';
console.log(fruits[1]);

// NOTE - Basic Function
function hello(_name = 'SYS') {
  //   if (isNaN(_name)) {
  //     _name = _name.toUpperCase();
  //   }

  //   console.log(`Welcome, Have a great day ${_name}`);
  console.log(`Welcome, Have a great day ${isNaN(_name) ? _name.toUpperCase() : _name}`);
}

hello();
hello('shijo shaji');
hello(121);

//

let num1 = 2;
let num2 = 3;

const val = (a, b) => {
  return a * b;
};

localStorage.setItem('mul', val(num1, num2));

console.log(val(num1, num2));

// objects - key/value pair

const person = {
  myName: 'shijo',
  age: 30,
  married: false,
  greet: function () {
    console.log('Hi', this.myName);
  },
};

console.log(person);
person.greet();

// conditional statements
// >= , <= , > , < , == , === , != , !===

if (2 > 3) {
  console.log('2 is great');
} else {
  console.log('44 is great');
}

if (2 == 2) {
  console.log(true);
}

if (2 == '2') {
  console.log(true);
}

if (2 === '2') {
  console.log(false);
}

console.log(localStorage.getItem('mul'));

// Logical operator

/**
 * || - OR
 *  && - AND
 *  ! - NOT
 *  */

let x = [2, 4, 22, -10];

function logicTest(val) {
  for (let index = 0; index < val.length; index++) {
    const x = val[index];
    if (x > 0 && x === 22) {
      console.log('Yiu are righT', x);
    } else {
      console.log('WRONG', x);
    }

    if (x > 0 || x === 22 || x < 0) {
      console.log('Yiu are righT', x);
    } else {
      console.log('WRONG', x);
    }
  }
}

logicTest(x);

// switch

const random = Math.floor(Math.random() * 6);
console.log(random);

switch (random) {
  case 0:
  case 1:
  case 2:
    console.log(`Case is shared ${random}`);
    break;
  case 3:
    console.log(`case in each block ${random} `);
    break;
  case 4:
    console.log(`case in each block ${random} `);
    break;

  default:
    console.log(`defaults ${random}`);
    break;
}

// LOOPS
let amt = (v = 10);
while (amt > 0) {
  console.log(`Amount ${amt}`);
  amt--;
}

do {
  console.log(`val ${v}`);
  v--;
} while (v > 0);


let xy = [2, 4, 22, -10];

function logicTest(val) {
  for (let index = 0; index < val.length; index++) {
    const x = val[index];
    if (x > 0 && x === 22) {
      console.log('Yiu are righT', x);
    } else {
      console.log('WRONG', x);
    }

    if (x > 0 || x === 22 || x < 0) {
      console.log('Yiu are righT', x);
    } else {
      console.log('WRONG', x);
    }
  }
}

logicTest(xy);