/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        var squareNum = 0;
        var result = 0;
        var storeNum=[];
        for ( squareNum ; result < 21; squareNum++ ) {
       
                    result=(squareNum*squareNum);
                    //console.log(result);
                    if (result>21) break;
                    else {storeNum.push(result);
                    console.log(storeNum);
                    }
        }
        
        document.getElementById("squareNum").innerHTML = storeNum ;
    });

    

})();
