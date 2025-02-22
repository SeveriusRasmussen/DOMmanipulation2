'use strict'

// Click me!-button (Exercise 1.)
const btn = document.querySelector("#click-me");
btn.addEventListener("click", () => {
    console.log("Ah Thank you!");
})

// For Testing-button
const testButton = document.querySelector("#test");
testButton.addEventListener("click", () =>{
    console.log("Hey du klikkede knappen!!!!");
});

// Don't Click Me!-button
let timesPressed = 0; //2. TimesPressed initialized.
let pMessage = "";
const button = document.querySelector("#spinButton");
button.addEventListener("click", () => {
    //This spins around the button
    document.getElementById("spinButton").style.transform += "skew(-50deg, 25deg) rotate(270deg)";

    // Times pressed increments with 1 (Exercise 2.)
    //Incrementing a variable
    console.log(timesPressed); //2. Output the timesPressed
    timesPressed++; //2. Raises the timesPressed with 1.

    //(exercise 3. if button clicked 1/2/3 times.)
    if (timesPressed === 1) {
        console.log("Please do not do that again");
        pMessage = "Please do not do that again";
    } else if (timesPressed === 2) {
        console.log("I told you not to do that");
        pMessage = "I told you not to do that";
    } else if (timesPressed === 3) {
        console.log("STOP!!!");
        pMessage = "STOP!!!";
    } else {
        // Advanced/Optional
        document.querySelectorAll("button").forEach(btn => btn.remove());
        pMessage = "That's it! I'm quitting!!"
    }

    // Exercise 4. Change the <p> innerTEXT
    document.querySelector("#message").textContent = pMessage;
});

// Exercise 5. If Reset button pressed, the timesPressed variable is changed to 0
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    timesPressed = 0;
});

/*
1. lines 3-7
2. lines 16 and 23-26
3. lines 28-42
4. lines 44-45 and the pMessage in 28-42
5. lines 48-52
Advanced. lines 39-41.
 */