/* 

caches -> data sent to server while making the network request calls, can store 4000 bytes data 
sessionStorage -> A session the duration on which a browser tab lives( start when we open tab on browser and ends
    when we close the tab ), we can store atleast 5MB data
    
localStorage -> capacity is more that caches or sessionStorage

origin: comprises of three things
1. Protocol: http or https
2. Host: flipkart.com, payth.com ...
3. Port: 8080 or some other

to access the localStorage data origin( three things ) should be same
for Example:
if website is: https://sachin.com 
then https://sachin.com/user  can also access the same localStorage items

*/

sessionStorage.setItem('name', 'Sachin');
sessionStorage.setItem('age', '23');
console.log(sessionStorage.getItem('name')); //Sachin
console.log(sessionStorage.length); //3 (because we set two key and value pairs and one is automaticall stored)

// as there are three key pairs so can use 0 to 2 to get key
console.log(sessionStorage.key(0)); //name
console.log(sessionStorage.key(1)); //IsThisFirstTime_Log_From_LiveServer
console.log(sessionStorage.key(2)); //age

sessionStorage.removeItem('age');
console.log(sessionStorage.getItem('age')); //null

sessionStorage.clear(); //will delete the sesstionStorage all data
