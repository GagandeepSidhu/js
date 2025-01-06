import Game from './Hangman';
import getPuzzleWord from './request';

// global variables
let game = null;
let puzzleParagraph = document.querySelector('.puzzle-p');
let remainGuessParagraph = document.querySelector('.remain-guess-p');
let remainGuessDiv = document.querySelector('.remaining-div');

// start the game
let startGame = () => {
	getPuzzleWord(3)
		.then((data) => {
			game = new Game(data.puzzle, 6);
			puzzleParagraph.textContent = game.getPuzzle();
			remainGuessParagraph.textContent = game.remainGuess;
			remainGuessParagraph.textContent = game.getStatusMessage();
			remainGuessDiv.classList.remove('danger');
			remainGuessDiv.classList.remove('success');
			remainGuessDiv.classList.add('normal');
		})
		.catch((error) => {
			console.log(error);
		});
};
startGame();

// for user input
window.addEventListener('keypress', (e) => {
	// condition to make the guess if game is in playing state
	// because we don't want to chenge to puzzleParagraph text after game is in finsished or failed state
	if (game.status === 'playing') game.guessPuzzle(e.key);
	puzzleParagraph.textContent = game.getPuzzle();
	remainGuessParagraph.textContent = game.getStatusMessage();
	if (game.status === 'playing') {
		remainGuessDiv.classList.remove('danger');
		remainGuessDiv.classList.remove('success');
		remainGuessDiv.classList.add('normal');
	} else if (game.status === 'finished') {
		remainGuessDiv.classList.remove('normal');
		remainGuessDiv.classList.remove('success');
		remainGuessDiv.classList.add('success');
	} else {
		remainGuessDiv.classList.remove('normal');
		remainGuessDiv.classList.remove('success');
		remainGuessDiv.classList.add('danger');
	}
});

// restart the game
document
	.getElementsByClassName('restart-button')[0]
	.addEventListener('click', (e) => {
		startGame();
	});
