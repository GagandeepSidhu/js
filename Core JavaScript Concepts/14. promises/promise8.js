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

question7();
