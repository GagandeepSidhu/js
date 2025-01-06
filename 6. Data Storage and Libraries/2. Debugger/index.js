// put debugger where you want to step to code, after it you can run it line by line manually
// from browser console 

// after putting debugger : 
// 1. go broswer and open console( using inspact )
// 2. press esc key -> it will take you to the source and where you can see you code and other files
// 3. you can add watch and can see variables in the scope
// 4. you can also check other variable values into console section
// 5. hit f9 or you can use buttons available to execute next step or can use play button run code without stoping 

let array = [];

// it is like putting break point to the code
// first break point
debugger
array.push( { name: 'Sahcin' } );

array.push( { name: 'Pradeep' } );

array.unshift( { name: 'Naman' } );

array.unshift( { name: 'Yashi' } );

// second break point
debugger

array.pop();

array.shift();

console.log(array);

