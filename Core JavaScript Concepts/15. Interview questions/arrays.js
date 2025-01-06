//find
let a = [1, 2, 3, 4];

//find elememt
let num = a.find((item) => item === 2);
console.log(num);

// find index
let index = a.findIndex((item) => item === 4);
console.log(index);
console.log(a.indexOf(2));

//check condition if at least one is true
console.log(a.some((item) => item === 3));

// check condition () all must true)
console.log(a.every((item) => item >= 0));

// take subarray
let startIndex = 1;
let endIndex = 3; //excluded
let subArray = a.slice(startIndex, endIndex);
console.log(subArray);

console.log(a.slice(-1)); //-1 is representing last index

//delete and insert
startIndex = 2;
let noOfElementsToDelete = 1;
a.splice(startIndex, noOfElementsToDelete, 'a', 'b');
console.log(a);

//concatinate
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
let arr3 = [6, 7];
let newArr = arr1.concat(arr2, arr3);
console.log(newArr);

//flat

arr1 = [[1, 2, 3, [4, 5]], 6, 7, [8, 9, [10, 11]]];
let depth = 2; // how many nested array it needs to flat
newArr = arr1.flat(depth);
console.log(newArr);

//second largest element
arr1 = [1, 2, 3, 4, 4, 4, 4, 3];
let distinctElementSet = new Set(arr1);
let distinctElementArray = Array.from(distinctElementSet);
console.log(distinctElementArray.sort((a, b) => b - a)[1]);

//
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

//power set of an array

//sliding max element

// kth missing no

// max of no of negative and positive no

let arr4 = ['apple', 'date', 'chary', 'banana', 'dragon fruit'];
arr4.sort();
console.log(arr4);

let arr5 = [20, 10, 11, 19, 18, 17, 14, 1];
arr5.sort();
console.log(arr5);
