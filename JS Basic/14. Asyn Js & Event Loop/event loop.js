/*

JS is a synchronous, single - threaded language
It has one call stack and it does one thing at a time
Call stack is present inside the javascript engine
When a program executes a GLOBEL EXECUTION CONTEXT( GEC ) is created and pushed into the call stack

Execution Context has two phases
1. Memory allocation(): Variables are allocated the mamory and initialized with undefined, Functions are also given
memory and initialized with the function code (not with undefined) 
2. Code execution( thread of execution ): Code will be executed line by line.If a variables assign a value then
it's value will be change inside memory allocation area as well 

When a function invoked/called then, a new EXICUTION CONTEXT will be created and pushed into the stack

Work of CALL STACK is simply execute whatever is inside the stack

IF a EXECUTION CONTEXT( EC ) is completly executed then it will pop out from the stack, now EC has gone

CALL STACK executes whatever inside it very quickly and it does not have any timer.So it something needs to
be wait(for example a statment/program/script should execute after 5 seconds) in this case CALL STACK can not execute it
because it does not have timer

EXECUTION CONTEXT is inside the CALL STACK, CALL STACK is inside the JS ENGINCE and JS ENGINE is inside BROWSER

Browser has the access of lots of resources like -> timer, local storage, console, bluetooth, location, 
database connections, display the content, display the content 

SO to access these resourses BROWSER uses below Web APIs:
Thise are not the part of javascript but js can use it to do some work 
* setTimeout
* DOM APIs (document.getElementById, ...)
* fetch
* localStorage
* conlose 
* location 

BROWSER provides these web apis to the EXECUTION CONTEXT using global variable 'window'

If some thing is taking some time to execute for example -> setTimeout( callback, 2000 )
then setTimeout will register a function name callback, and a timer will be set of 2s
after 2 seconds this callback function will be pushed to CALLBACK QUEUE
There is a EVENT LOOP, it is like a gatekeeper that check that is some thing is inside the
CALLBACK QUEUE then it will take it from queue then then push it into the CALL STACK
Now CALL STACK will execute is quickly

EVENT LOOP -> It continuously monitor the CALL STACK and CALLBACK QUEUE.If it finds that currently
CALL STACK is emply and CALLBACK QUEUE has something to execute then EVENT LOOP simply pop it out from
CALLBACK QUEUE and push it to CALL STACK.Now CALL STACK will execute it quickly

When we use addEventListener then it also do the same thing as setTimeout do means it will register a
callback with a event attached to it.when event occurs then callback will be pushed to CALLBACK QUEUE
then EVENT LOOP handles it

fetch API: it is little different from setTimeout or addEventListener.When a fetch API comes then it will
register the call back function( it will wait for the server to return the data).When response from server is
completed then this call back function will be inserted into a MICROTASK QUEUE.

MICROTASK QUEUE: It is similar to the CALLBACK QUEUE but it has higher priority then any other task.
All the callback function that returns a promise and call back function on MutationObserver comes inside
MICROTASK QUEUE

EVENT LOOP: First check if CALL STACK is empty or not, if it is empty then check it there is any task inside
MICROTASK QUEUE, if present then pop it from MICROTASK QUEUE and push it into the CALL STACK.But if not present
then check CALLBACK QUEUE and do the same thing.

*/