/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

var Eliment = document.querySelector('.actions');

Eliment.addEventListener('click', function(event) {
    var operators = event.target.closest(".operators");
    
})


switch(Eliment){
    
    case "+" :
    console.log("result");
        //document.getElementById("result").innerHTML = result ;
        break;
}

/*var Eliment = document.querySelector('.actions');

Eliment.addEventListener('click', function(event) {
    var operators = event.target.closest('.operator');
    console.log(operators.innerHTML);
})

switch(add){
    
    case "+":
    console.log(result);
        //document.getElementById("result").innerHTML = result ;
        break;
}

*/
//button.onclick(test());
//console.log(operator);

/*   
function test() {
    if (button.getElementById("")){
     result = parseInt(op1)+parseInt(op2);
   console.log(result);
       document.getElementById("result").innerHTML = result ;
    }
    else{
        return false;
    }
    //return true;
}

(function() {
    return true;
})();
*/