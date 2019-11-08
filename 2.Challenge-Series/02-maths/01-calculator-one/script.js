/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
   
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var op1 = document.getElementById("op-one").value ;
        var op2 = document.getElementById("op-two").value;
        let resultAdd = parseInt(op1)+parseInt(op2);
   console.log(resultAdd);
       document.getElementById("result").innerHTML = resultAdd ;
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var op1 = document.getElementById("op-one").value ;
        var op2 = document.getElementById("op-two").value;
        let resultSub = parseInt(op1)-parseInt(op2);
   console.log(resultSub);
       document.getElementById("result").innerHTML = resultSub ;
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var op1 = document.getElementById("op-one").value ;
        var op2 = document.getElementById("op-two").value;
        let resultMul = parseInt(op1)*parseInt(op2);
   console.log(resultMul);
       document.getElementById("result").innerHTML = resultMul;
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var op1 = document.getElementById("op-one").value ;
        var op2 = document.getElementById("op-two").value;
        let resultDiv = parseInt(op1)/parseInt(op2);
   console.log(resultDiv);
       document.getElementById("result").innerHTML = resultDiv ;
    });
})();
