let Phrase = require("rafalkesik-palindrome");

function palindromeTester(event) {
    event.preventDefault();

    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `"<b>${phrase.content}</b>" is a palindrome!`;
    } else {
        palindromeResult.innerHTML = `"<b>${phrase.content}</b>" is not a palindrome.`;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let tester = document.querySelector("#palindromeTester");
    tester.addEventListener("submit", function(event) {
        palindromeTester(event);
    });
});
