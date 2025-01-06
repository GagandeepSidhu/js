console.log(['sachin'] + [2, 3]); //sachin2,3
console.log([] + []); //''
console.log([34] + [9, 10]); //349,10
console.log({ s: 20 } + [5]); // [object object]5
console.log({} + {}); //[object Object][object Object]
console.log({ s: 9, p: 12 } + { a: 5, b: 'nk' }); //[object Object][object Object]

/*
How it works: + operator works for numbers and strings. But if we are adding other than 
numbers or string then it will simply try to convert to string first then concatinate.

using join function for array then concatinate both
console.log([34]+[9,10])

[34].join() = '34'
[9,10].join() = '9,10'

'34' + '9,10' = '349,10'
*/

console.log([5, 6, 7].join());
console.log([4, 5, 6]);

// Question 2:
function f() {
	return 'sahcin';
}
let sentence = f`hi`; //templet string consedired as argument for the functinos
console.log(sentence); //sachin

// Question 3
//how to make content editable for any website
//in console -> document.body.contentEditable = true;

// Question 4

function f1() {
	console.log(this.length);
}

let x = {
	length: 5,
	method: function () {
		//here argument[0] = f1 so below line calling f1()
		arguments[0](); //here this = array of arguments= [f1, 90] that will be passed to f1
		// so this.length will be 2 as there are 2 agrument passed
	},
};
x.method(f1, 90); //2

// Question 5
