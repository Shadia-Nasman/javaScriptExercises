/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here  Sunday 28 October 2018, 23h32

var today = new Date();
var todayMonth = today.getMonth();console.log("month "+todayMonth);
var todayDay = today.getDate();console.log("today number "+todayDay);
var todayName =today.getDay();console.log("today name "+todayDay);
var todayYear= today.getFullYear();
var todayHour =today.getHours();
var todayMinutes = today.getMinutes();




var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



document.getElementById("target").innerHTML =  days[todayName]+"  " +
 todayDay + "  " +months[todayMonth] +" "+todayYear+" , "+todayHour+" h "+todayMinutes; 



})();
