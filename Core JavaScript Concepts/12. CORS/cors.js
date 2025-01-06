/*

CORS: cross origin resource sharing
Origin = combination of -
    1. protocol, like https or http
    2. host, like google.com 
    3. port, like 8080

It is a mechanism that uses additional http headers to tell the browser whether the specific
web app can share resource with another web app. (in this case both app has different origin )

earlier sharing was not allowed if the origin are different.for example:
App2 wants some data from App1.
    App1(origin) = https://sachin.com 

App2 is not allowed in these cases:
1. App2 = https://google.com    (host is different)
2. App2 = https://api.sachin.com    (again host is different)
3. App2 = https://sachin.com: 5050  (port is different)
4. App2 = http://sachin.com  (protocol is different)

let suppose origin A want to request data from origin B then below steps will take place

                 Preflight/options call will be made by A 
Origin A      --------------------------------------------->       Origin B( B will validate preflight call )

                additional https headers will be send by B
Origin A      <---------------------------------------------       Origin B( B will validate preflight options )

additional https headers will client / browser let know that it is save to make a call to server
additional headers -> [accept, control, allow, origin : *], here * means every domain is allowed to make request
if want to allow only a specific domain then write it at the place of *

                    actual POST or some other call
Origin A      --------------------------------------------- >      Origin B( B will validate preflight options )

*/ 

