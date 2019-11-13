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
        
        document.getElementById("squareNum").innerHTML = "square numbers less than 21 are : "+storeNum ;
    });

    document.getElementById("run1").addEventListener("click", function() {

        // your code here
        var evenNum = 0;
        var result = 0;
        var remainder;
        var storeNum=[];
        for ( evenNum ; result < 21; evenNum++ ) {
       
                    result=(evenNum+2);
                    //console.log(result);
                    if (result>21) break;
                    else {storeNum.push(result);
                        evenNum++
                    console.log(storeNum);
                    }
        }
        
        document.getElementById("evenNum").innerHTML = "even Numbers less than 21 are:  " + storeNum ;
    });

    

})();
