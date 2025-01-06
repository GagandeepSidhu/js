const Hangman = function( word, remainingGuess ){
    this.word = word.split(''),
    this.ramainingGuess = remainingGuess
    this.guessLetters = ['c']
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = ''
    this.word.forEach( letter => {
        if ( this.guessLetters.includes( letter ) || letter === ' ' )
        {
            puzzle += letter
        }
        else
        {
            puzzle+= '*'
        }
    } )
    return puzzle;
}

let game1 = new Hangman('car', 2);
let game2 = new Hangman('batman', 5);

console.log( game1.getPuzzle(), game2.getPuzzle() );
// Hangman { word: 'car', ramainingGuess: 2 } Hangman { word: 'batman', ramainingGuess: 5 }



