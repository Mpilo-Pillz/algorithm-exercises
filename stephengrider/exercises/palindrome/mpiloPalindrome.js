// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    debugger
   return str.split('').reduce((initialValueThatIsEmptyStringPAsseedAsSecondArg, theCurrentValueFromArray ) => theCurrentValueFromArray + initialValueThatIsEmptyStringPAsseedAsSecondArg, '') === str;
//    return str.split('').reduce((reverse, character ) => character + reverse, '') === str;
}

console.log(palindrome('dlamini'))
console.log(palindrome('ini'))

module.exports = palindrome;
