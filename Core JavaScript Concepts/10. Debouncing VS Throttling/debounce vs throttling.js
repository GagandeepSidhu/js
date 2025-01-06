/*

Example 1: In a search bar, a network call is made on every key press.

Debouncing: Make network calls only if the gap between two events is greater then a partidular delay
Example: In this case if we use Debouncing then let delay that we want between events is 3seconds.
So if we press key and then stops for at least 3 seconds only then a network call will be made.  

Throttling: Ignore all events for a fix amount of time and then make api call after that time.
Example: In the same above search bar example. Let fix amount time is 3s then if a user press key to 
search something then it will ignore all event till 3 seconds and after 3 seconds it will make network
call and will suggest something.

Example 2: In case of resizing (addEventListener('resize')). 
It resize event will occur many time if we resize the window.
In this case debounging is more effecient that throttling. 

Example 3: In a shooting game if click event is attached with the shooting of a gun.
In this case throttling make more sence.Because if we are using debounging and make click and click
without a delay then gun will not fire any shot.
But if we are using throttling then and making many click then it will fire a shot after a fix amount of time. 

*/
