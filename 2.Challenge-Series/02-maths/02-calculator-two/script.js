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
   
    var operators = event.target.closest(".operator");
    var op1 = document.getElementById("op-one").value ;
    var op2 = document.getElementById("op-two").value;

    switch(operators.innerHTML){
            case "+" :
            var  result = parseInt(op1)+parseInt(op2);
            console.log(result);
            break;

            case "-" : var  result = parseInt(op1)-parseInt(op2);
            console.log(result);
            break;

            case "×":
            var  result = parseInt(op1)*parseInt(op2);
            console.log(result);
            break;

            case "÷":
            var  result = parseInt(op1)/parseInt(op2);
            console.log(result);
            break;
    }

});
    
*/
