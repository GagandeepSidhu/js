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
		})
		.finally(() => {
			console.log('end');
		});
}

function15();
