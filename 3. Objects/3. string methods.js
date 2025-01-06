let password = '  myPassword   ';

console.log(password.length); // 15
console.log(password.toUpperCase()); //  MYPASSWORD
console.log(password.toLowerCase()); //  mypassword
console.log(password.includes('Password')); // true
console.log(password.trim()); // myPassword
console.log(password.indexOf('Pas')); //4
console.log(password.indexOf('NON')); //-1

password[4] = 'u'; //will not change anything
console.log(password); //  myPassword

console.log(password.substring(5, 7)); //as // substring(startIndexIncluside, endExclusive);
