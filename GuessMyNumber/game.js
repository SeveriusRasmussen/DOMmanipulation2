//Save the buttons as constants
//Input
const inputField = document.querySelector("#user-guess");

// make the input limits into 1 to 5. So not another input can be entered.
inputField.addEventListener("input", () => {
    // Fjern alle ikke-numeriske tegn fra inputtet.
    /* Forklaring:
    Regulær udtrykket replace(/[^0-9]/g, '')
    bruges til at fjerne alle tegn, der ikke er tal, fra en streng.
    Her er en forklaring af, hvordan det virker:

    /[^0-9]/g: Dette er et regulært udtryk.

    [^0-9]: Dette mønster matcher ethvert tegn, der ikke er et tal (0-9).
    ^ inden i firkantede parenteser betyder "ikke", så [^0-9] betyder "ikke et tal".

    g: Dette er en flag, der står for "global".
    Det betyder, at erstatningen skal ske for alle forekomster i strengen, ikke kun den første.

    .replace(..., ''): Denne metode erstatter alle forekomster, der matcher det regulære udtryk,
    med det, der angives i den anden parameter, som i dette tilfælde er en tom streng ('').
    Det betyder, at alle ikke-numeriske tegn fjernes fra strengen.
    Så samlet set fjerner replace(/[^0-9]/g, '') alle tegn, der ikke er tal, fra en given streng.
     */
    inputField.value = inputField.value.replace(/[^0-9]/g, '')

    // Sørg for, at værdien stadig er inden for det ønskede interval 1-5.
    let value = parseInt(inputField.value);
    if (value < 1) {
        inputField.value = 1;
    } else if (value > 5) {
        inputField.value = 5;
    }
})


//Buttons
const guessButton = document.querySelector("#guess-button");

//Paragraph resultOnGuess
const guessResult = document.querySelector("#resultOnGuess");

//Higher or Lower function
const lowerHigher = document.querySelector("#higherOrLower");

//Add an eventListener that takes input from the input field
guessButton.addEventListener("click", ()=>{
    console.log("Congrats")

    /* Higher or Lower
        use the variable "string" to print out in the paragraph.
    */
    let string = "";
    /* True or False
    value attribut for the HTML <input>
    returns a streng no matter what the user enters.
    It's why parseInt() is used.
    */
    if (parseInt(inputField.value) === randomNumber) {
        console.log("TRUE!");
        guessResult.textContent = "You guessed right!!!"
        string = "AWESOME!!!";
    } else if (parseInt(inputField.value) > randomNumber){
        console.log("FALSE!");
        guessResult.textContent = "You were totally wrong";
        string = "The number is too high";
    } else if (parseInt(inputField.value) < randomNumber) {
        console.log("FALSE!");
        guessResult.textContent = "You were totally wrong";
        string = "the number is too low";
    }
    lowerHigher.textContent = string;
});

//Print something to the console (See lines 50-56.)

//Make a random number between 1-5
let randomNumber = generateNumber();
console.log(`The random number is ${randomNumber}`);

//Returns a random number between 1-5
function generateNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

// Reset the guess game (as in "refresh the site")
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    randomNumber = generateNumber();
    console.log(`The random number is ${randomNumber}`)
})

// High Score ( work in process! Still thinking.)