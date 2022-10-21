/** Exercise 02 - Reverse **/

// Add your code here
document.getElementById("reverse").addEventListener("click", reverseNumber);


function reverseNumber()  
{  
    let number = document.getElementById("input").value;
    if(number.length<8 || number.length>8){
        alert("invalid input");
    }
    else{
    let numReverse = number.split("").reverse().join("");
    document.getElementById("hie").innerHTML = numReverse; 
    }  
}