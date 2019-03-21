// length: returns the number of elements in the array
// slice: make a copy of the entire array or a portion of it
arr1 = [1,2,3,4,5,6];
const copy = arr1.slice(); //=> [ 1, 2, 3, 4, 5, 6 ]
const portion = arr1.slice(2,1); //=> []

//concat: joins two arrays
let arr2 = [99,22,45,69];
const combined = arr1.concat(arr2);

//join: join elements in an array into a string
const arr3 = ['Cool Mo Dee', 'Love is the word'];
const joinIt = arr3.join(' ');

//indexOf: find the index of the elemnt pass in
const idx45 = arr2.indexOf(45); //=> 2

//lastIndexOf: start searching for the index from the end
const idx99 = arr2.lastIndexOf(99); //=> 0

/*
Part I
Write the code necessary to do the following:

Create an empty array called arr.
Add your first name to the arr variable
Add your last name to the end of the arr variable
Add your favorite color to the beginning of the arr variable
Your variable arr should look like this (using Elie for a first name, Schoppik for a last name and purple for a favorite color) ["purple", "Elie", "Schoppik"]. Keep going!

Remove the favorite color from the arr variable (remember this is the first value in the array - what method can you use to remove the first value in an array?)
Create another array called arr2.
Add your favorite number to arr2
Add the string "JavaScript" to the end of the arr2 variable
Your variable arr2 should look like this (using 42 as a favorite number) [42, "JavaScript"].

See if the value 42 exists in the arr2 array. Do this using the indexOf method. What does indexOf return to you if the value passed to it can not be found in the array?
Create a new variable called combinedArr which is the result of your arr and arr2 variables combined into one array.
Your combinedArr variable should look like this (using our previous values) ["Elie", "Schoppik", 42, "JavaScript"]
*/
let arr = [];
arr.push('Pascal');
arr.push('Laurent');
arr.unshift('blue');
arr.shift();
arr;

arr2 = [];
arr2.push(42)
arr2.push('JavaScript');
arr2;
arr2.indexOf(42); //=> 0

const combinedArr = arr.concat(arr2);
combinedArr;

/*
Part II
Complete the following, starting from the following array: var arr = ["JavaScript", "Python", "Ruby", "Java"]

Return the following array: ["Python", "Ruby"].
Combine the array with the array ["Haskell", "Clojure"].
Return the string "JavaScript, Python, Ruby, Java".
Try to explain, in your own words (or diagrams!) what the difference is between passing by value vs. passing by reference.

*/

arr = ["JavaScript", "Python", "Ruby", "Java"]
const pr = arr.slice(1,3); //=> ["Python", "Ruby"]
const combinedArr2 = arr.concat(["Haskell", "Clojure"]);
const newString = combinedArr2.slice(0,4).join(', ');

