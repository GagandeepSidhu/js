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

question8();
