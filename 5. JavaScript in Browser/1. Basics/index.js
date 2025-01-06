document.write('file loaded <br><br><br><br>');

const paragraph = document.querySelector('p');
console.log(paragraph); // <p>Paragraph</p>

paragraph.textContent = 'Changed paragraph';

paragraph.innerHTML = paragraph.innerHTML + ' and new item added';

// to remove paragraph
// paragraph.remove();

const all_paragraphs_array = document.querySelectorAll('p');

all_paragraphs_array.forEach((paragraph, index) => {
	paragraph.textContent = 'paragraph ' + index;
});

// adding elements to dom
const newParagraph1 = document.createElement('p');
newParagraph1.textContent = 'Lorem ipsum dolor 1';

document.querySelector('body').append(newParagraph1);

// we can not append element again, it is allowed one time
document.querySelector('body').append(newParagraph1);

// we can also use
const div1 = document.createElement('div');
div1.textContent = 'div1 ';
document.querySelector('body').appendChild(div1);

let button1 = document.createElement('button');
button1.textContent = 'Click';
div1.append(button1);

button1.addEventListener('click', (event) => {
	console.log('button clicked');
	console.log(event);
});

// appending more than one element
let input1 = document.createElement('input');
input1.type = 'text';
input1.id = 'name';
input1.value = '';
input1.placeholder = 'Enter your name';
console.log(input1.innerHTML); // ''  , because nothing is inside the input tag
console.log(input1.outerHTML); // outerHtml <input type="text" id="name" placeholder="Enter your name">

let button2 = document.createElement('button');
button2.id = 'btn2';
button2.textContent = 'Click 2';

document.getElementById('root').innerHTML +=
	input1.outerHTML + button2.outerHTML;

document.getElementById('btn2').addEventListener('click', (e) => {
	document.getElementById('root').style.padding = '25px';
	document.getElementById('root').style.backgroundColor = 'lightgreen';
	console.log('button2');
});
