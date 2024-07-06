let states = ["Kansas", "nebraska", "North Dakota", "south dakota"];

// Returns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// Returns a an array of states in link forms
// Example: ["North Dakota"] -> ["https:example.com/north-dakota"]
function linkify(elements) {
    return elements.map( element => `https://example.com/${urlify(element)}` )
}
console.log(linkify(states));