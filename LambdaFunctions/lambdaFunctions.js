/* A) Refactor the following code to use a lambda function
Filtering with a standard function declaration */
/* unrefactored code
let data = ["One","Two","Three","Foooour","Fiveeeer"];
let filteredData = data.filter(filter);
console.log(filteredData)

function filter(element){
    if(element.length > 5){
        return true;
    }
    else{
        return false;
    }
}
*/

/* B)
//Refactor the following code to use a lambda function
//Setting a timeout
setTimeout(func, 5000);

function func(){
    console.log("Hey I just waited 5 seconds")
}
 */

// Lambda er kendt som => pilen/arrow i javascript.

// A)
let data = ["One","Two","Three","Foooour","Fiveeeer"];
let filteredData = data.filter(element => element.length > 5)
console.log(filteredData)

// B)
// func -> () => {...}
setTimeout(() => {console.log("Hey I just waited 5 seconds")}, 5000);

// C)
// eventListener for the button
document.querySelector("#btn").addEventListener("click", () => {
    alert("Knappen blev klikket!");
});
/*
eventListener info:
    ()
    btn refers the element, which choose all <button>-elements.
    ()
    .btn refers the class, which choose all elements with the class button
    (<button id="btn">)
    #btn refers the id, which choose only one element with id button.
 */

