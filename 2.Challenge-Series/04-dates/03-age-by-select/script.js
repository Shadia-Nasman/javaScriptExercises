/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function() { 
var birthDay= document.getElementById("dob-day").value;console.log("birthday: "+birthDay);
    var birthMonth= document.getElementById("dob-month").value;console.log("birthMonth: "+birthMonth);
    var birthYear= document.getElementById("dob-year").value;console.log("birthYear: "+birthYear);

var today= new Date();
    var todayDay= today.getDate();console.log("today  Day: "+todayDay);
    var todayM=today.getMonth();todayMonth=todayM+1;console.log("today Month:  "+todayMonth);
    var todayYear=today.getFullYear();console.log("today Year: "+todayYear);

var ageDays= Math.abs(todayDay-birthDay);console.log("age days: "+ageDays);
var ageMonths=Math.abs(todayMonth-birthMonth);console.log("age Months: "+ageMonths);//january=0 febreuary=1
var ageYears= todayYear-birthYear;console.log("age Years:  "+ageYears);
document.getElementById("ageToday").innerHTML="you are "+ageYears+" years old ; "+ todayMonth+" months ; "+ageDays+" days";

});

})();




