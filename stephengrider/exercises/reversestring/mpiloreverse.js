// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseMpilo(str) {
    let stringArray = str.split('');
    let reversedArray = []
    console.log(stringArray.length);
    for(let i = stringArray.length - 1; i >= 0; i--) {
        console.log(i);
        reversedArray.push(stringArray[i] )
    }
    return reversedArray.join('')
}

function reverseKarabo(str) {
    return str.split('').reverse().join('');
}

function reverseGrider(str) {
    let reversed = '';
 
    for (let character of str) {
        reversed = character + reversed;
    }
 
    return reversed;
 }

 function reverseStephen(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '')
  }
  
  console.log(reverseStephen('Pillz'));
 
 console.log(reverseGrider('Nikita'));

console.log(reverseKarabo('Fikasentani'));

console.log(reverseMpilo('thulani'));

module.exports = reverse;
