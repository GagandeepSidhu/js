// for all countries url
// https://restcountries.eu/
// https://restcountries.eu/rest/v2/all

// search iso 3166-2 india
// replace india with the country for other country and get iso code 
// example ISO 3166-2:IN  
// it will help to work with the country api
let countryCode = 'IN'

// with the api we will receive a array of objects and objects includes various 
// properties, alpha2Code is one of themn
// we can set alpha2Code : IN for india and similar other code for other countries 

let request = new XMLHttpRequest()

let url = 'http://restcountries.eu/rest/v2/all'
let method = 'GET'
request.open( method, url )
request.send()

request.addEventListener( 'readystatechange', e => {
    console.log('somethind');
    if ( e.target.readyState === 4 && e.target.status === 200 )
    {
        console.log( e.target.response );
        console.log( typeof e.target.response );  //string
        let data = JSON.parse( e.target.response )
        let country = data.find( element => element.alpha2Code == countryCode )
        console.log(country.name);  // india
        
    }
    else if ( e.target.readyState === 4 )
    {
        console.log('Internal Error take place');
    }
})