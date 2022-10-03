// Variables

let myName = "Shijo's";
console.log(`My name is ${myName}`);
// resign new value
myName = 'Shijo Shaji';
console.log(`My new name ${myName}`);

// Constant
// cant reassign once assigned

const myState = 'KA';
console.log(myState);

//myState = 'KL'; // we get Assignment to constant variable error
// console.log(myState);

// NOTE: JS is losely coupled, means after declaring variable the data type depends on value assigned

let test;
console.log(typeof test); //undefined

test = 'hi am test';
console.log(typeof test);

test = 253;
console.log(typeof test);

test = '253';
console.log(typeof test);

// Numbers

let val1 = 5;
let val2 = 3;
let add, sub, div, mul;

add = val1 + val2;
sub = val1 - val2;
mul = val1 * val2;
div = val1 / val2;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
console.log('remainder', val1 % val2);

let a = 20;
a = a + 10;
console.log(a);
// this can be rewritten as
a += 10; // +=, -=, *=, /=
console.log(a);

// increment / decrement

let b = 10;
b = b - 1;
console.log(b);
// to decrement by one value we can rewrite as
b--; // b++
console.log(b);
