document.querySelector('#form').addEventListener('submit', (e) => {
	// console.log(e.target.name);
	e.preventDefault();
	console.log(e.target.name.value);
});

document.getElementById('check').addEventListener('change', (e) => {
	let checked = e.target.checked; //it will be true if checked otherwise false
	console.log(checked);
});

document.getElementById('select').addEventListener('change', (e) => {
	console.log(e.target.value);
});
