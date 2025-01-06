let toDoArray = [{ title: 'play', description: 'play' }];

let titleInput = document.getElementById('title');
titleInput.addEventListener('change', (e) => {
	titleInput.value = e.target.value;
});

let descriptionInput = document.getElementById('description');
descriptionInput.addEventListener('change', (e) => {
	descriptionInput.value = e.target.value;
});

// add items to toDoArray
let addButton = document.getElementById('add-button');
addButton.addEventListener('click', (e) => {
	let title = document.getElementById('title').value;
	let description = document.getElementById('description').value;
	toDoArray.push({ title, description });
	console.log(toDoArray);
});

// filtering
function searchToDo(text) {
	// it will clear previously added paragraph
	// let paragraphs = document.querySelectorAll('#search-div p');
	// paragraphs.forEach((paragraph) => {
	// 	paragraph.remove();
	// });

	// instead of doing above steps, we can simply use like below to clear a element
	document.querySelector('#search-div').innerHTML = '';
	let filteredItems = toDoArray.forEach((item) => {
		if (
			item.title.toUpperCase().includes(text.toUpperCase()) ||
			item.description.toUpperCase().includes(text.toUpperCase())
		) {
			let paragraph = document.createElement('p');
			paragraph.innerHTML =
				'<h2> ' + item.title + '</h2> <p>' + item.description + '</p>';
			document.getElementById('search-div').appendChild(paragraph);
		}
	});
}

searchToDo('play');

document.getElementById('search').addEventListener('input', (e) => {
	console.log(e.target.value);
	searchToDo(e.target.value);
});
