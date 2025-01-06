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

function promiseMethod() {
	let promiseArraySuccess = [getPlayer(3), getTeam('Sachin')];
	// let promiseArraySuccessFailed = [getPlayer(3), getTeam('Sachi')];
	let promiseArrayFailed = [getPlayer(9), getTeam('Sachi')];
	// Promise.all resolves all promises parallely and send back another promise that
	// hold array of results when we resolve it.
	// but even a single promise fails (means rejected) then it wil fail entirely
	// on all promises success it returns a promise with resolved as array with
	// all values
	// on fail it will give first rejected value in catch block
	// Promise.all(promiseArraySuccess)
	// 	.then((dataArray) => {
	// 		console.log(dataArray);
	// 	})
	// 	.catch((err) => console.log(err));

	//Promise.race will give us a promise that holds single
	// result( whose promise resolve or rejected first then will the the output ),
	// it will give either resolved or rejected value
	// Promise.race(promiseArrayFailed)
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

promiseMethod();

//Interview questions on promise
