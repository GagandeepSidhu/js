// we can use any solution, using Promise is the mostly used solution but
// here I am using callback solution
// other solution and proble is defined after this function
const getPuzzleWord = (wordCount, callback) => {
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', (e) => {
		if (e.target.readyState === 4 && e.target.status === 200) {
			let data = JSON.parse(e.target.response);
			callback(undefined, data);
		} else if (e.target.readyState === 4) {
			callback('An error has taken place', undefined);
		}
	});

	request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
	request.send();
};

// proble for asynchronous execution
const getPuzzleWithProblem = () => {
	const request = new XMLHttpRequest();
	let data;
	request.addEventListener('readystatechange', (e) => {
		// console.log(e);
		if (e.target.readyState === 4 && e.target.status === 200) {
			data = JSON.parse(e.target.response);
			console.log(data);
		} else if (e.target.radyState === 4) {
			console.log('Internal server error');
		}
	});

	request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3');
	request.send();
	return data;
};
let data = getPuzzleWithProblem();
console.log('My data is: ', data); //My data is:  undefined
// it is happening because to get the response it take some time but mean while
// js is executing the instructions, so data will be return without getting the response as undefined
// from getPuzzleWithProblem function

// solution1.  using call back function
const getPuzzleWithSolution1 = (callback) => {
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', (e) => {
		// console.log(e);
		if (e.target.readyState === 4 && e.target.status === 200) {
			let data = JSON.parse(e.target.response);
			callback(undefined, data);
		} else if (e.target.readyState === 4) {
			callback('An error has taken place', undefined);
		}
	});

	request.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3');
	request.send();
};

// calling
getPuzzleWithSolution1((error, data) => {
	if (error) {
		console.log(`Error: ${error}`);
	} else {
		console.log(data);
	}
});

// this will get printed before the printing inside the above function
console.log('This is asynchronous programming');

// solution 2. using synchronous programming
// but it is bad practice to use synchronous way to execute because
// we will not be able to do anyting, so our interface (that user is using to do something) will be
// in hang state(like will not be able to click button or write something)
const getPuzzleWithSolution2 = () => {
	const request = new XMLHttpRequest();
	// we can pass third argument as true = (we want asynchronous way to execute, it is default value) or
	// false = synchronous way to execute
	// request.open( 'GET', 'https://puzzle.mead.io/puzzle?wordCount=3', false )

	// using slow-puzzle that respond after waiting 1 second, to show how synchronous programming
	// can hang our application
	// go to the application (hangman.html) and try to click chckbor after calling this function
	request.open('GET', 'https://puzzle.mead.io/slow-puzzle?wordCount=3', false);
	request.send();

	let data;
	//instead of using e.target, use request
	if (request.readyState === 4 && request.status === 200) {
		data = JSON.parse(request.response);
	} else if (request.readyState === 4) {
		throw new Error('An error has taken place');
	}

	return data;
};

// it is working fine but we are getting a warning
// request.js:76 [Deprecation] Synchronous XMLHttpRequest on the main
// thread is deprecated because of its detrimental effects to the end
// user's experience. For more help, check https://xhr.spec.whatwg.org/.
// calling
data = getPuzzleWithSolution2();
console.log(data);

// solution 3. using Promise
const getPuzzleWithSolution3 = (wordCount) =>
	new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', (e) => {
			// console.log(e);
			if (e.target.readyState === 4 && e.target.status === 200) {
				let data = JSON.parse(e.target.response);
				resolve(data);
			} else if (e.target.readyState === 4) {
				reject('An error has taken place');
			}
		});
		request.open('GET', `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
		request.send();
	});
// calling
console.log('------Solution 3 Using Promise---------');
getPuzzleWithSolution3(7).then(
	(data) => {
		console.log(data);
	},
	(error) => {
		console.log(error);
	},
);
