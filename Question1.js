// 1. Uppercasethefirstcharacter

// Write a function ucFirst(str) that returns the string str with the
// capitalized first character, for instance:
//        ucFirst("john") == "John";

function ucFirst(str) {
    const capitalizedString = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalizedString;
}

console.log(ucFirst("hello"));