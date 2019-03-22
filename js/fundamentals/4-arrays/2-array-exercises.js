/*

For each of the exercises below, assume you are starting with the following people array.

var people = ["Greg", "Mary", "Devon", "James"];
Using a loop, iterate through this array and console.log all of the people.
Write the command to remove "Greg" from the array.
Write the command to remove "James" from the array.
Write the command to add "Matt" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
Write the command that gives the indexOf where "Mary" is located.
Write the command that gives the indexOf where "Foo" is located (this should return -1).
Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

*/

let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

people.shift(); //=> removes Greg
people.pop(); //=> removes James
people.unshift('Matt'); //=> insert Matt to the front of the array
people.push('Pascal'); //=> Add Pascal to the end fo the array

for (let i = 0; i < people.length; i++) {
  if (people[i] === 'Mary') {
    console.log(people[i]);
    break;
  }
}

people

const copyArr = people.slice(2); //=> [ 'Devon', 'Pascal' ]
people.indexOf('Mary'); //=> 1
people.indexOf('Foo'); //=> -1

people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,'Elizabeth'); //=> [ 'Greg', 'Mary', 'Elizabeth', 'James' ]

const withBob = people.concat('Bob'); //=> [ 'Greg', 'Mary', 'Elizabeth', 'James', 'Bob' ]

 