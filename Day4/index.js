'use strict';

console.log('Welcome to Day 4');

const fnames = ['John', 'Mathew', 'Luke', 'Mark', 'Abraham', 'Issac'];
const lname = 'Issac';

let newNames = [];
/**
 *
 * @param fnamesList - Array of First Names
 * @param lname - Static last name
 * @returns - Continate of First and Last name
 */
let collectiveNames = (fnamesList, lname) => {
  for (const ele of fnamesList) {
    if (ele != 'Issac') newNames.push(`${ele} ${lname}`);
  }
  return newNames.sort();
};

let res = collectiveNames(fnames, lname);
console.log({
  Result: res,
});

// ENDS

let age = '';

function releaseVoterForm() {
  return 'Dear candidate you are less than 18years old, Please wait untill you reach 18years';
}

function releaseVoterID() {
  return 'Dear candidate your voter ID will be issued soon';
}

let checkVoteEligitibility = (age) => {
  return age >= 18 ? releaseVoterID() : releaseVoterForm();
};

let statusOfVoting = checkVoteEligitibility(17);
console.log('statusOfVoting', statusOfVoting);

// ENDS
