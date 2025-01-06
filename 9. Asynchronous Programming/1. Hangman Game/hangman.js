const Hangman = function( word, remainingGuess ){
    this.word = word.toLowerCase().split(''),
    this.remainingGuess = remainingGuess
    this.guessLetters = []
    this.status = 'playing'
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

Hangman.prototype.calculateStatus = function () {
    let isFinished = true
    // this.word.forEach( letter => {
    //     if ( !this.guessLetters.includes( letter ) )
    //     {
    //         isFinished = false    
    //     }
    // } )
    
    // instead of using forEach, we can also use every method
    // it will return false if condition is flase even for a single element
    isFinished = this.word.every( letter => this.guessLetters.includes( letter ) || letter === ' ' );

    if ( this.remainingGuess === 0 )
        this.status = 'failed'
    else if ( isFinished )
        this.status = 'finished'
    
}

Hangman.prototype.makeGuess = function ( guess ) {
    guess = guess.toLowerCase()
    let isUnique = !this.guessLetters.includes( guess );
    let badGuess = !this.word.includes( guess )
    
    if ( this.status !== 'playing' )
    {
        return
    }
    // console.log(isUnique, badGuess);
    if ( isUnique )
    {
        this.guessLetters.push( guess );
    }
    if ( isUnique && badGuess )
    {
        this.remainingGuess--
    }
    this.calculateStatus()
}

Hangman.prototype.getStatusMessage = function () {
    if ( this.status === 'playing' )
    {
        return `Remaining Guess: ${this.remainingGuess}`
    }
    if ( this.status === 'finished' )
    {
        return `Great guess. You have won the match`
    }
    return `Nice Try! The word was ${this.word.join('')}`
}

let game1

function getStart () {
    console.log('called');
    getPuzzleWord( 3, ( error, data ) => {
    if ( error )
    {
        console.log(`Error: ${error}`);
    }
    else
    {
        // console.log( data );
        game1 = new Hangman( data.puzzle, 5 );
        puzzleParagraph.textContent = game1.getPuzzle();
        guessParagraph.textContent = game1.remainingGuess;
        statusParagraph.textContent = game1.getStatusMessage();
        
    }
} )
}

getStart()


let puzzleParagraph = document.querySelector( '#puzzle' )
let guessParagraph = document.querySelector( '#guess' )
let statusParagraph = document.querySelector( '#status' )

// puzzleParagraph.textContent = game1.getPuzzle();
// guessParagraph.textContent = game1.remainingGuess;
// statusParagraph.textContent = game1.getStatusMessage();


// console.log( game1.getPuzzle());
// // Hangman { word: 'car', ramainingGuess: 2 } Hangman { word: 'batman', ramainingGuess: 5 }

// console.log( game1.makeGuess( 'w' ) );
// console.log( game1 );


window.addEventListener( 'keypress', e => {
    // console.log( e );  
    // console.log( e.key );  //value of pressed key
    // console.log( e.charCode );    //charCode is like ascii value of characters
    // console.log( String.fromCharCode( e.charCode ) );
    
    // console.log( '----------------Game----------------' );
    game1.makeGuess( e.key )
    // console.log( game1.getPuzzle() )    
    // console.log(game1.remainingGuess);
    puzzleParagraph.textContent = game1.getPuzzle();
    guessParagraph.textContent = game1.remainingGuess;
    console.log( game1.status );
    statusParagraph.textContent = game1.getStatusMessage();
    
} )

document.querySelector('#reset').addEventListener('click', getStart)


