// to run our code into the strict mode use below string :
'use strict'

if ( true )
{
    // if we don't use 'use strict' then below code  will run fine as num will be created as a global variable
    // but if we use strict mode then it will give error: num is not defined
    num = 12
    console.log(num);   
}

let public = 'sahcin'   // public will be reserved in the future js, so in strict mode we will receive 
                        // error Unexpected strict mode reserved word

// strict mode is useful if we want that our code should be run fine for future and present witout crashing