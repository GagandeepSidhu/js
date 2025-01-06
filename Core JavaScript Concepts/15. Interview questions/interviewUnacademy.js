//1. difference b/w map and forEach

// map -> return an array and does not modify the original array.
//We can use chan over it
const arr = [1, 2, 3, 4];
const chanArray = arr.map((item) => item + 2).filter((item) => item % 2);
// we are making a chain of operation map then filter
console.log(chanArray);

// forEach -> does not returns anything, so can not use chain methods on it

//2. difference b/w undefined and null
console.log(typeof null); //object
console.log(typeof undefined); //undefined

// undefined and not defined both are different
let a;
console.log(a); //undefined
// console.log(b); //Error: b is not defined

//3.
console.log(null == undefined); //true
console.log(null === undefined); //false

//4. event deligation
// catching the event in parent
function eventDeligation() {
	document.getElementById('products').addEventListener('click', (event) => {
		console.log('event', event.target.id);
		document.getElementById(event.target.id).style.color = 'red';
	});
}

// eventDeligation();

//5. flatten the array
function flatten() {
	const arr1 = [
		[1, 2],
		[3, 4],
		[5, 6, [7, [8]], 9],
		[10, 11, 12],
	];
	console.log(typeof new Array());

	//recursive function to flat the array
	function flatArray(arr) {
		let ans = [];
		for (let element of arr) {
			if (Array.isArray(element)) {
				let flatArrayResult = flatArray(element);
				ans = [...ans, ...flatArrayResult];
			} else {
				ans.push(element);
			}
		}
		return ans;
	}

	//here flat takes the depth like how many levels of nested array can be there
	console.log(arr1.flat(2));
	console.log(arr1.flat(3));

	console.log(flatArray(arr1));
}

flatten();

// 6. difference b/w var, let and const

function diffBetweenVarLetConst() {
	// var -> functional scoped, can be redeclared, can initialize more than once
	// can declare without initialize
	var var1 = 5;
	var var1 = 10;

	// const -> block scoped, can not redeclare, can't initialize more than once
	// can't declare without initialize
	const const1 = 10;
	// const const1 = 20;   // error
	// const const2; //error can't declare without initialize

	// let -> block scoped, can not redeclare, can initialize more than once
	// can declare without initialize
	let let1 = 10;
	// let let1 = 20;

	let1 = 20; //reinitialize
}

//7. compose method polyfil
function composeExample() {
	// const resultFun = compose(addFive, subtractTwo, multiplyFour)
	// resultFun(2) ==> ( ( (2 * 4) -2 ) + 5)
	// order of function executio on value start from end means->
	// first -> multiplyFour -> second subtractTwo -> third addFive
	function addFive(a) {
		return a + 5;
	}
	function subtractTwo(a) {
		return a - 2;
	}
	function multiplyFour(a) {
		return a * 4;
	}

	function compose1() {
		const functions = arguments;

		return function (v) {
			let res = v;
			for (let i = functions.length - 1; i >= 0; i--) {
				res = functions[i](res);
			}
			return res;
		};
	}

	function compose2(...functions) {
		return function (v) {
			return functions.reduceRight((result, fun) => {
				result = fun(result);
				return result;
			}, v);
		};
	}

	let resultFun = compose1(addFive, subtractTwo, multiplyFour);
	console.log(resultFun(5));

	resultFun = compose2(addFive, subtractTwo, multiplyFour);
	console.log(resultFun(4));
}

composeExample();

//8. polyfil for Promise.all

//9. how to center a div
/*
    //method1:
    div {
        position: absolute;
        top: 50%; left:50%;
        transform: translate(-50%, -50%);
    }

    //method2:
    parentDiv: {
        display: flex;
        justify-content: center;
        align-item: center;
    }

    //method3:
    parentDiv: {
        display: grid;
        justify-content: center;
        align-item: center;
    }
*/

// 10. css box model
/*
    width, border, padding, margen -> all combine is box model 
    
*/

// 11. polyfil fo memoization
