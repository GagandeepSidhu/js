// rest operator = ...players
function cricketTeam(caption, coach, ...players) {
	console.log(`Caption: ${caption}
Coach: ${coach}
Players: ${players.join(', ')}`);
}

cricketTeam('Zahir', 'Rohit', 'Rahul', 'Sachin', 'Kohli', 'Jack');
//output:
// Caption: Zahir;
// Coach: Rohit;
// Players: Rahul, Sachin, Kohli, Jack;

// spread operator
let team = {
	caption: 'Rahane',
	coach: 'Dravid',
	players: ['SK', 'PK', 'AK', 'SK'],
};

// useing ...team.players while calling function
// it is like breaking array into elements and passing as individeal parameter
cricketTeam(team.caption, team.coach, ...team.players);
//output
// Caption: Rahane;
// Coach: Dravid;
// Players: SK, PK, AK, SK;

// spread operator for objects
let book = {
	name: 'Drawing',
	auther: 'Sachin',
};

let newBook = {
	...book,
	price: 25,
	pages: 100,
	auther: 'S Kumar',
};

console.log(newBook); //{ name: 'Drawing', auther: 'S Kumar', price: 25, pages: 100 }

// object destructuring
let {
	name: nm,
	price: pc = 'Default 0', // give price a new name as pc with defalut value
	rating = 'Default raitng', //providing default value
	...rest
} = newBook;
console.log(nm); //Drawing
console.log(pc); //25
console.log(rating); //Default raitng
console.log(rest); //{ auther: 'S Kumar', pages: 100 }

// array destructuring
let age = [21, 34, 54, 22];
let [first, second, , fourth, fifth = -1] = age; // can provide default value
console.log(first); //21
console.log(second); //34
console.log(fourth); //22
console.log(fifth); //-1

let [f, ...restElements] = age;
console.log(f); //21
console.log(restElements); //[ 34, 54, 22 ]
