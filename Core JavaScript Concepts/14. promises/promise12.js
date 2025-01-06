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

question11();
