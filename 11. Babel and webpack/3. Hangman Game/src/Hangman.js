class Hangman {
	constructor(word, remainGuess) {
		this.word = word.toUpperCase().split('');
		this.remainGuess = remainGuess;
		this.guessLetters = [];
		this.status = 'playing';
	}
	getPuzzle = () => {
		let puzzle = '';
		this.word.forEach((letter) => {
			if (letter === ' ' || this.guessLetters.includes(letter)) {
				puzzle += letter;
			} else puzzle += '*';
		});
		return puzzle;
	};

	guessPuzzle = (letter) => {
		letter = letter.toUpperCase();
		if (!this.word.includes(letter) && !this.guessLetters.includes(letter))
			this.remainGuess--;
		if (letter != ' ' && !this.guessLetters.includes(letter))
			this.guessLetters.push(letter);

		this.setStatus();
	};

	setStatus = () => {
		if (
			this.word.every(
				(letter) => this.guessLetters.includes(letter) || letter === ' ',
			)
		) {
			this.status = 'finished';
		} else if (this.remainGuess === 0) {
			this.status = 'failed';
		}
	};

	getStatusMessage = () => {
		if (this.status === 'playing') {
			return `Remaining Guesses: ${this.remainGuess}`;
		}
		if (this.status === 'failed') {
			return `Well try, correct word is: ${this.word.join('')}`;
		}
		if (this.status === 'finished') {
			return `Great, you have won!!`;
		}
	};
}

export default Hangman;
