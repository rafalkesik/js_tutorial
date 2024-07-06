// Reverses a string.
function reverse(string) {
    return Array.from(string).reverse().join("");
}

// Returns true for a palindrome, false otherwise.
function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

// Returns array of the username and domain
function emailParts(email) {
    return email.toLowerCase().split("@")
}