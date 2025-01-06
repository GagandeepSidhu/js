function question9() {
	let promise1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('first');
		}, 1000);
	});

	// if we provide a promise to a resolve method

	// 1. The promise you provided will be adopted by the promise created
	// by the new Promise constructor, and the executor function will wait
	// for it to settle.
	// When the provided promise settles (either fulfilled or rejected),
	// the newly created promise will settle with the same state and
	// value as the provided promise.

	// 2. If the provided promise is already settled:
	// If the provided promise is fulfilled, the newly created promise will
	// also be fulfilled with the same value.
	// If the provided promise is rejected, the newly created promise will
	// also be rejected with the same reason.
	let promise2 = new Promise((resolve, reject) => {
		resolve(promise1);
	});

	promise2
		.then((res) => {
			console.log(res);
			return res;
		})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log('rejected', err);
		});
}

question9();
