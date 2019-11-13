/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
    
        var nums= document.getElementById("numbers").value;
        
        var nums1 = nums.split(",");
        console.log("the array splitted into strings  "+nums1);
        var n = nums1.map(Number);
        console.log("the array converted to numbers  "+n);
        
        var sortedNumbers=n.sort(function(a, b){return a-b});
        console.log("the array is sorted ascending  "+sortedNumbers);
        document.getElementById("sorted").innerHTML=sortedNumbers;


    });

})();
