/*

Throttling: It is a mechanism for rate limiting of event calls.It is useful because
if we are performing some expensive operation like api call then it will reduce performance
to make many api calls. So we can use throttling to limit the rate of event calling.

*/

function getData () {
    console.log('Fatchihng data from server');
}

function throttling ( callBack, timeLimit ) {
    let flag = true
    return function () {
        let context = this, args = arguments
        if ( this === window ) { console.log( 'window' ); }
        //here this is representing window as throttling is function is 
        // called using window.addEventListener and the object that is before dot(.), represents this
        if(flag)
        {
            callBack.apply( context, args )
            flag = false
            setTimeout( () => {
                flag = true
            }, timeLimit)
        }
    }
}

window.addEventListener( 'scroll', throttling(getData, 5000))