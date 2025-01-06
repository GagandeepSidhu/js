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

question3();
