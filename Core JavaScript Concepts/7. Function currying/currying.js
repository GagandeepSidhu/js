let multiply = ( x, y ) =>
{
    console.log(x*y);
}


// currying
let multiplyByNum = multiply.bind( this )
multiplyByNum( 3, 4 )   //12

let multiplyBy2 = multiply.bind( this, 2 )
multiplyBy2( 5 )    //10

let multiplyBy2And8 = multiply.bind( this, 2, 8 )
multiplyBy2And8(5)  //16     5 will be ignored as we have already provided the enough arguments
