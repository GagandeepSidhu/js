// https://www.youtube.com/watch?v=HaJdoFp2OEc

function promiseExample() {
	let prom1 = Promise.resolve('Operation successful');
	let prom2 = Promise.reject('Operation failed');
	console.log(prom1, prom2);
	prom1.then((data) => console.log(data));
	prom2.catch((err) => console.log(err));
}
promiseExample();

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
