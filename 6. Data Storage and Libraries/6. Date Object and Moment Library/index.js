let date = new Date();

console.log('Date', date.toString()); //Date Mon Jul 12 2021 12:53:43 GMT+0530 (India Standard Time)
console.log('Year', date.getFullYear()); //2021
console.log('Month', date.getMonth()); //6  , for january = 0, feb = 1...
console.log('Day', date.getDate()); // 12  day of month
console.log('Hours', date.getHours()); // 12
console.log('Minutes', date.getMinutes()); // 53
console.log('Seconds', date.getSeconds()); // 47  day of month

console.log(date.getUTCDate()); // 12 day of current month for example 12 july so output will be 12
console.log(date.getUTCDay()); // for Monday it will return 1
console.log(date.getUTCFullYear()); //2021
console.log(date.getUTCHours()); //7

// manually date not the current
let myDate = new Date('June 20 1997 6:12:30');

// unix epoch, it is a base date, like 0 for numbers
// January 1st 1970 00: 00: 00
// before this date all date consider as negative and after positive
// we can only generate date using time

console.log(myDate.getTime()); //866767350000

let now = new Date();
let time = now.getTime();

let dateWithTime = new Date(time);

// now and dateWithTime has same value

console.log(now, dateWithTime);
console.log(now.toString() === dateWithTime.toString()); //true

// so it is easy to store date a numeric value (only using time)

// Moment:
// ===========================================
// https://momentjs.com/docs/
// working with third pary library moment for date:
// go to momentjs.com -> doc(https://momentjs.com/docs/) -> #Browser -> cdnjs.com ->
// copy latest script tag from https://cdnjs.com/libraries/moment.js  :
{
	/* <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */
}

let mDate = moment();
console.log('moment Date', mDate); // a object that holds _d as the date and some other properties
console.log(mDate.toString()); //Mon Jul 12 2021 13:32:08 GMT+0530

// set or get methods
// with a parameter it will work as setter method
mDate.minute(5); // it will set minutes to 5
console.log(mDate.toString()); //on Jul 12 2021 13:05:51 GMT+0530

// without parameter it will work as getter method
console.log(mDate.minute()); // 5

// hours, seconds and for other properties it work in same way

// add and subtract method

mDate.add(1, 'year');
console.log(mDate.toString()); //Tue Jul 12 2022 13:05:37 GMT+0530

mDate.add(24, 'hours');
// with add 24 hours day will be change
console.log(mDate.toString()); // Wed Jul 13 2022 13:05:17 GMT+0530

mDate.subtract(12, 'days');
console.log(mDate.toString()); //Fri Jul 01 2022 13:05:26 GMT+0530

// we can make a chain as well
mDate.add(10, 'years').subtract(5, 'minutes').subtract(1, 'seconds');
console.log(mDate); //Jul 02 2032 07:00:08 GMT+0530

// formating the data

// Tokens are case-sensitive.

// Input	Example	        Description
// YYYY	    2014	         4 or 2 digit year. Note: Only 4 digit can be parsed on strict mode
// YY	    14	            2 digit year
// Y	    -25	            Year with any number of digits and sign
// Q	    1..4	        Quarter of year. Sets month to first month in quarter.
// M MM	    1..12	        Month number
// MMM MMMM	Jan..December	Month name in locale set by moment.locale()
// D DD	    1..31	        Day of month
// Do	    1st..31st	    Day of month with ordinal
// DDD DDDD	1..365	        Day of year
// X	1410715640.579  	Unix timestamp
// x	1410715640579   	Unix ms timestamp

console.log(mDate.format('Do MMMM YYYY')); //2nd July 2032
console.log(mDate.format('Do-MMMM-YYYY')); //2nd-July-2032
console.log(mDate.format('Do/MMMM/YYYY')); //2nd/July/2032
console.log(mDate.format('Do@MMMM@YYYY')); //2nd@July@2032

console.log(mDate.fromNow()); //in 11 years  , it calculates difference between current data and our created date

let timeStamp = mDate.valueOf();
console.log(timeStamp); //1972348232122  , it calculates total time from the base date

// get the date back from timeStamp
console.log(moment(timeStamp).toString()); //Fri Jul 02 2032 08:00:21 GMT+0530

// to sort the dates we can simply store the timestamp value and as it is integer then can perform sorting easily
