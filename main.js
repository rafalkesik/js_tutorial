let Phrase = require("rafalkesik-palindrome");

function palindromeTester() {
    let string = prompt("Please enter a string for palindrome testing:");
    let phrase = new Phrase(string);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"<b>${phrase.content}</b>" is a palindrome!`;
    } else {
        palindromeResult.innerHTML = `"<b>${phrase.content}</b>" is not a palindrome.`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("#palindromeTester");
    button.addEventListener("click", function() {
        palindromeTester();
    });
});
