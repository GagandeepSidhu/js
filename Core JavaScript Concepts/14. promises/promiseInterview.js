// https://www.youtube.com/watch?v=HaJdoFp2OEc

function promiseExample() {
	let prom1 = Promise.resolve('Operation successful');
	let prom2 = Promise.reject('Operation failed');
	console.log(prom1, prom2);
	prom1.then((data) => console.log(data));
	prom2.catch((err) => console.log(err));
}
// promiseExample();

const Players = {
	1: {
		id: 1,
		name: 'Sachin',
		age: 21,
	},
	2: {
		id: 2,
		name: 'Pradeep',
		age: 24,
	},
	3: {
		id: 3,
		name: 'Naman',
		age: 22,
	},
};

const Teams = {
	Pradeep: 'India',
	Naman: 'Australia',
	Sachin: 'Newzeland',
};

function getPlayer(id) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Players[id]) {
				resolve(Players[id]);
			} else {
				reject({ msg: 'Player does not exist' });
			}
		}, 1000);
	});
}

function getTeam(playerName) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Teams[playerName]) {
				resolve(Teams[playerName]);
			} else {
				reject({ msg: 'Team does not exist for given player' });
			}
		}, 1000);
	});
}

// it will make callback hell like using callbacks
// we can overcome with it by using promise chainig method
getPlayer(1).then((player) => {
	getTeam(player.name).then((team) => {
		console.log(team);
	});
});

//chaining method
getPlayer(2)
	.then((player) => {
		return getTeam(player.name);
	})
	.then((team) => {
		console.log(team);
	});

function promiseMethod() {
	let promiseArraySuccess = [getPlayer(3), getTeam('Sachin')];
	// let promiseArraySuccessFailed = [getPlayer(3), getTeam('Sachi')];
	let promiseArrayFailed = [getPlayer(9), getTeam('Sachi')];
	// Promise.all resolves all promises parallely and send back another promise that
	// hold array of results when we resolve it.
	// but even a single promise fails (means rejected) then it wil fail entirely
	// Promise.all(promiseArrayFailed)
	// 	.then((dataArray) => {
	// 		console.log(dataArray);
	// 	})
	// 	.catch((err) => console.log(err));

	//Promise.race will give us a promise that holds single
	// result( whose promise resolve or rejected first then will the the output ),
	// it will give either resolved or rejected value
	// Promise.race(promiseArraySuccessFailed)
	// 	.then((data) => console.log(data))
	// 	.catch((err) => console.log(err));

	// same as Promise.all but it returns all results resolved + rejected
	// we can ignore catch block for it
	// Promise.allSettled(promiseArraySuccessFailed)
	// 	.then((data) => console.log(data))
	// 	.catch((err) => console.log(err)); // no meaning of using catch with allSettled

	// it is same as Promise.race but it returns only resolved promise
	Promise.any(promiseArrayFailed)
		.then((data) => console.log('any', data))
		.catch((err) => console.log('err->', err));
}

// promiseMethod();

//Interview questions on promise

console.log('----------------------------------------------------------------');

function question1() {
	console.log('start');

	let promise1 = new Promise((resolve, reject) => {
		console.log(1);
		resolve(2);
	});

	promise1.then((res) => {
		console.log(res);
	});

	console.log('end');
}

// question1();

function question2() {
	console.log('start');

	let promise1 = new Promise((resolve, reject) => {
		console.log(1);
		resolve(2);
		console.log(3);
	});

	promise1.then((res) => {
		console.log(res);
	});

	console.log('end');
}

// question2();

function question3() {
	console.log('start');

	let promise1 = new Promise((resolve, reject) => {
		console.log(1);
		console.log(3);
	});

	promise1
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.log(err));

	console.log('end');
}

// question3();

function question4() {
	console.log('start');

	function fn() {
		new Promise((resolve, reject) => {
			console.log(1);
			resolve('success');
		});
	}

	// TypeError: Cannot read properties of undefined (reading 'then')
	// becuase fn() is not returning any promise so can't use then and catch
	fn()
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.log(err));

	console.log('end');
}

// question4();

function question5() {
	console.log('start');

	let promise1 = new Promise((resolve, reject) => {
		reject('Some error');
	});

	promise1
		.then((res) => {
			console.log(res);
		})
		.then(() => {
			console.log('success2');
		})
		.then(() => {
			console.log('success3');
		})
		.catch((err) => console.log(err)) //this will execute
		.then(() => {
			console.log('success4'); //this will execute
		});

	console.log('end');
}

// question5();

function question6() {
	console.log('start');

	let promise1 = new Promise((resolve, reject) => {
		resolve('Success 1');
	});

	promise1
		.then((res) => {
			console.log(res); //will execute
		})
		.then(() => {
			console.log('success2'); //this will execute
		})
		.then(() => {
			console.log('success3');
		})
		.catch((err) => console.log(err)) //this will execute
		.then(() => {
			console.log('success4'); //this will execute
		});

	console.log('end');
}

// question6();

function question7() {
	console.log('start');

	function job(state) {
		return new Promise((resolve, reject) => {
			state ? resolve('Success') : reject('error');
		});
	}
	let promise1 = job(true);

	promise1
		.then((res) => {
			console.log(res);
			return job(false);
		})
		.catch((err) => {
			console.log(err);
			return 'Caught Error';
		})
		.then((data) => {
			console.log(data);
			return job(true);
		})
		.catch((err) => {
			console.log(err);
		});

	console.log('end');
}

// question7();

function question8() {
	// if we return something (even error) then it will be treated as resolve
	// but if we throwing anything then it will be treated as reject
	console.log('start');

	function job(state) {
		return new Promise((resolve, reject) => {
			state ? resolve('Success') : reject('error');
		});
	}
	let promise1 = job(true);

	promise1
		.then((res) => {
			console.log(res);
			return job(true);
		})
		.then((data) => {
			if (data !== 'Victory') throw 'Defeat';
			return job(true);
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
			return job(false);
		})
		.then((res) => {
			console.log(res);
			return job(true);
		})
		.catch((err) => {
			console.log(err);
			return 'Error caught';
		})
		.then((res) => {
			console.log(res);
			return new Error('test');
		})
		.then((res) => {
			console.log('success', res.message);
		})
		.catch((err) => {
			console.log('Error', res.message);
		});

	console.log('end');
}

// question8();

function question9() {
	let promise1 = new Promise((resolve, reject) => {
		resolve('first');
	});

	let promise2 = new Promise((resolve, reject) => {
		resolve(promise1);
	});

	promise2
		.then((res) => {
			return res;
		})
		.then((res) => {
			console.log(res);
		});
}

// question9();

//Question write below code with async await
function question10(url) {
	return fetch(url).then((res) => {
		if (res.status === 200) {
			return res.json();
		} else {
			throw new Error(res.status);
		}
	});
}

async function answer10(url) {
	const response = await fetch(url);
	if (response.status === 200) {
		const json = await response.json();
		return json;
	}
	throw new Error(res.status);
}

// question10('https://fakeurl.com/no-such-user.json').catch((err) => {
// 	console.log(err);
// });

function question11() {
	const prom1 = new Promise((resolve, reject) => {
		resolve('prom1');
	});
	const prom2 = new Promise((resolve, reject) => {
		resolve('prom2');
	});
	const prom3 = new Promise((resolve, reject) => {
		resolve('prom3');
	});

	// create a function that resolve promises recursively

	function resolveRecursively(promiseArray) {
		if (!promiseArray.length) return;

		// shift returns first elemnet after removing it from original array
		const promiseAtIndex0 = promiseArray.shift();

		promiseAtIndex0
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));

		resolveRecursively(promiseArray);
	}

	resolveRecursively([prom1, prom2, prom3]);
}

//creating promisePolyfill
function question12() {
	function PromisePolyFill(executer) {
		let onResolve, onReject;

		// to handle synchronos promises
		// bcause .then method will be called later than executer method
		// so onResolve, onReject will not be initialized by that time
		// so we need to handle those cases as well
		let isCalled = false,
			value,
			isFullfilled = false;

		this.resolve = function (val) {
			isFullfilled = true;
			value = val;
			if (typeof onReject === 'function') {
				onResolve(val);
				isCalled = true;
			}
		};

		this.reject = function (val) {
			isFullfilled = true;
			value = val;
			if (typeof onReject === 'function') {
				onReject(val);
				isCalled = true;
			}
		};

		this.then = function (cb) {
			onResolve = cb;
			if (isFullfilled && !isCalled) {
				onResolve(value);
				isCalled = true;
			}
			return this;
		};
		this.catch = function (cb) {
			onReject = cb;

			if (isFullfilled && !isCalled) {
				onReject(value);
				isCalled = true;
			}
			return this;
		};

		try {
			executer(this.resolve, this.reject);
		} catch (error) {
			this.reject(error);
		}
	}

	/// Promise.resolve
	PromisePolyFill.resolve = (val) =>
		new PromisePolyFill((resolve, reject) => resolve(val));

	/// Promise.reject
	PromisePolyFill.reject = (val) =>
		new PromisePolyFill((resolve, reject) => reject(val));

	let promPolyFill = new PromisePolyFill((resolve, reject) => {
		// setTimeout(() => {
		// 	if (Math.random() > 0.5) {
		// 		resolve('Promise polyfill resolved');
		// 	} else {
		// 		reject({ msg: 'Error occured' });
		// 	}
		// }, 1000);

		if (Math.random() > 0.5) {
			resolve('Promise polyfill resolved');
		} else {
			reject({ msg: 'Error occured' });
		}
	});

	promPolyFill.then((val) => console.log(val)).catch((err) => console.log(err));
	// .then((val) => console.log('Second', val)); //can use second time for our implementation
}

question12();

//event loop visualizer
//www.jsv9000.app/

// question11();

function question13() {
	function A(a) {
		return function (b) {
			if (b) {
				return A(a + b);
			} else {
				return a;
			}
		};
	}

	console.time('Start');
	console.log(A(6)(7)(8)());
	console.timeEnd('Start');
}

function question14() {
	let promise1 = new Promise((resolve, reject) => {
		resolve(1);
	});
	let promise2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(2);
		}, 1000);
	});
	let promise3 = new Promise((resolve, reject) => {
		setTimeout(() => {
			reject({ msg: 'error occured' });
		}, 1000);
	});
	let promise4 = new Promise((resolve, reject) => {
		resolve(4);
	});

	Promise.myAll = (promises) => {
		let ans = [];
		let count = promises.length;
		let error = null;
		return new Promise((resolve, reject) => {
			for (let i = 0; i < promises.length; i++) {
				Promise.resolve(promises[i]).then((data) => {
					ans[i] = data;
					count -= 1;
					if (count === 0) {
						resolve(ans);
					}
				}, reject);
				// .catch((err) => {
				// 	console.log('I am being rejected', i);
				// 	console.log(error);
				// 	reject(error);
				// });
			}
		});
	};

	Promise.myAll([promise1, promise2, promise3, promise4])
		.then((data) => {
			console.log('resolved', data);
		})
		.catch((err) => {
			console.log('rejected', err);
		});

	// promise3.then((data) => console.log(data)).catch((err) => console.log(err));
}

// question14();

function function15() {
	const p = new Promise((resolve, reject) => resolve(5));

	p.then((data) => {
		console.log(data);
		console.log('first');
		return data * 2;
	})
		.then((data) => {
			console.log(data);
			console.log('second');
			return data * 2;
		})
		//finally does not receive any arguments and does not affect
		//the promise's value or state.
		.finally((data) => {
			console.log(data);
			console.log('third');
			return data * 2;
		})
		.then((data) => {
			console.log(data);
			console.log('fourth');
			return data * 2;
		});
}

function15();
