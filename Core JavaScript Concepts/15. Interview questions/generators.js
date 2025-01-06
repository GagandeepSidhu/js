// it is not possible to return 2 different values from a function
// but we can achieve it using generators
// to make a function generator, we need to use * for ex: function *funName()
// function fun () {
//     return 10;
//     return 20;
// }
function* fun() {
	yield 10;
	yield 20;
}

let generator = fun();

let pair = generator.next();

while (pair.value) {
	console.log(pair);
	//{ value: 10, done: false }
	// { value: 20, done: false }

	pair = generator.next();
}

console.log(pair); //{ value: undefined, done: true }
