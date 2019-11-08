/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    do{   let gender = window.prompt("enteryour gender");
   
   let age = window.prompt("enteryour age");
   
   let town = window.prompt("enteryour town");


   var conf = window.confirm("your are a "+gender+" from "+town+" and your age is "+age+" years old");
}
while(conf==false)
   


})();
