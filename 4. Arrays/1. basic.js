let numbers = [];

let names = ['sachin', 'pardeep', 'naman'];

console.log(numbers); // []
console.log(names); // [ 'sachin', 'pardeep', 'naman' ]

console.log(names.length); // 3

// insert elements
numbers.push(2);
numbers.push(4);
numbers.push(6);
console.log(numbers); // [ 2, 4, 6 ]

// can not use negative indexins
console.log(numbers[-2]); // undefined

console.log(numbers.pop()); // 6    // pop method removes last element and return it
console.log(numbers.push(60)); // 3    // push insert element and return size of array
console.log(numbers); // [ 2, 4, 60 ]

// shift -> removes first element and return it
// unshift -> add element at first position(at index 0) and return length of array
console.log(numbers.shift());
console.log(numbers.unshift(1));
console.log(numbers); // [ 1, 4, 60 ]

// splice(index, how_many_element_to_delete, element_to_insert)
let devices = ['dev1', 'dev2', 'dev3'];

devices.splice(2, 0, 'new_dev3'); // 2 is the index, 0 items to remove, insert 'new_dev3'
console.log(devices); // [ 'dev1', 'dev2', 'new_dev3', 'dev3' ]

devices.splice(2, 9, 'hey'); // it will remove everything after 2nd index(including 2) as 9 is greater than
// the remaining items after 2(inclusively) and then insert 'hey'
console.log(devices); // [ 'dev1', 'dev2', 'hey' ]

devices.splice(2, 0, 3, 4, 5); // to insert more that one value
console.log(devices); //[ 'dev1', 'dev2', 3, 4, 5, 'hey' ]

devices.length = 1; // only one element ramain and other will be deleted
console.log(devices);

{
	for (let i = 1; i <= 4; i++) {
		// setTimeout( () => { console.log( i ); }, -1 );
	}
	var my = 100;
	{
		my = 200;
	}
	console.log(my);
	// output of block,(uncomment the setTimeout)
	// 200
	// 1
	// 2
	// 3
	// 4
}

// arrow function does not bind it's own this, so there is no meaning to use this inside arrow function

// forEach

let myArray = [4, 5, 6, 7, 3];

myArray.forEach((item, index) => {
	console.log(index, item);
});
// 0 4
// 1 5
// 2 6
// 3 7
// 4 3

// when we pass function as a argument to another function then it is called call back function

// searching
let searchArray = [3, 5, 6, 7, 3, 3, 2];
console.log(searchArray.indexOf(3)); // 0
console.log(searchArray.indexOf(100)); // -1

let objectArray = [{}, { name: 'sachin' }];
console.log(objectArray.indexOf({})); // -1
console.log(objectArray.indexOf(objectArray[0])); // 0
console.log({} === {}); // false

// if a object don't have the property then it will be undefined
console.log(objectArray[0].name);

// search using findIndex function
const index = objectArray.findIndex((item, index) =>
	item.name ? item.name === 'sachin' : null,
);
console.log(index); // 1

// find method
let obj1 = objectArray.find((item) =>
	item.name ? item.name === 'sachin' : null,
);
console.log(obj1); // { name: 'sachin' }

// filter
// returns array of elements that match
let array1 = [
	{ title: 'sachin', text: 'this my book based on sachin life' },
	{ title: 'in the sky', text: 'this book is for sky' },
	{ title: 'classic music', text: 'this book is for music' },
	{ title: 'sky fall', text: 'it is for fall down' },
	{ title: 'nothing', text: 'sky' },
];

let newArray = array1.filter((item) => {
	return item.title.includes('sky') || item.text.includes('sky') ? true : false;
});
console.log(newArray);
// output
// [
//   { title: 'in the sky', text: 'this book is for sky' },
//   { title: 'sky fall', text: 'it is for fall down' },
//   { title: 'nothing', text: 'sky' }
// ]

// sort
// we can use sort without any parameter(for the default sorting)
let array2 = [
	{ f: 'two', s: 'sachin' },
	{ f: 'two', s: 'naman' },
	{ f: 'one', s: 'halk' },
	{ f: 'eight', s: 'game' },
];
array2.sort((first, second) => {
	if (first.f < second.f) {
		return -1; // no order change, order -> first, second
	} else if (first.f > second.f) {
		return 1; // order will be change, order -> second, first
	} else {
		if (first.s < second.s) {
			return -1; // no order change, order -> first, second
		} else if (first.s > second.s) {
			return 1; // order will be change, order -> second, first
		} else {
			return 0; //
		}
	}
});
console.log(array2);
// output
// [
//   { f: 'eight', s: 'game' },
//   { f: 'one', s: 'halk' },
//   { f: 'two', s: 'naman' },
//   { f: 'two', s: 'sachin' }
// ]
