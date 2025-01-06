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

question14();
