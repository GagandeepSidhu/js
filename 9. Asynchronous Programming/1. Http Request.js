// https://puzzle.mead.io/puzzle
// it generates random text in form of a object for example:
// {"puzzle":"Priceless Piano"}

// creating a http request 
// using XML we can transfer our data into various format
// for documentation on XMLHttpRequest : search mdn xmlhttprequest
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
let request = new XMLHttpRequest();


// add a event listener to the request 
request.addEventListener( 'readystatechange', e => {

    // readyState property of XMLHttpRequest
    // Value    State	             Description
    // 0	   UNSENT	             Client has been created. open() not called yet.
    // 1	   OPENED	             open() has been called.
    // 2	   HEADERS_RECEIVED	     send() has been called, and headers and status are available.
    // 3	   LOADING	             Downloading; responseText holds partial data.
    // 4	   DONE	                 The operation is complete.
    
    
    if ( e.target.readyState === 4 && e.target.status === 200)
    {
        console.log( e.target );
        console.log( typeof e.target.response );  //string
        let data = JSON.parse( e.target.response )
        console.log(data);  //{puzzle: "Upscale Dining"}
    }
    else if ( e.target.readyState === 4 )
    {
        console.log('Some error take place');
    }
})

// set open method using a method (get, post, put, delete...) and a url
let url = 'https://puzzle.mead.io/puzzle'

// url to get puzzle with our word count
url = 'https://puzzle.mead.io/puzzle?wordCount=3'

let method = 'GET'
request.open( method, url );
request.send()
// go to browser conlose -> network -> check puzzle -> response 
// we can see in response a object {"puzzle":"Priceless Piano"}




