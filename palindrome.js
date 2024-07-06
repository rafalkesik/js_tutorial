// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
    this.content = content;

    // Returns true for a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        let processedContent = this.content.toLowerCase();
        return processedContent === reverse(processedContent);
    }
}
