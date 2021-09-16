// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {

//     if (Math.sign(n) === -1) {
//         n = Math.abs(n);
//         console.log('convert coupe -->', n);
//         stringInt = n.toString();
//         stringArr = stringInt.split(''); 

//         stringInt = n.toString()
//     stringArr = stringInt.split('');

//     stringArr = stringArr.reduce((acc, currentItem) => currentItem + acc, '').split('');

//     for (let i = 0; i < stringArr.length; i++) {
//         if(stringArr[0] < 1) {
//             stringArr.shift();
//         } 
//     }
//     stringArr = stringArr.join('')
//     console.log(stringArr);
//     console.log(parseInt(stringArr));
//     revInt = parseInt(stringArr);

//      return -Math.abs(revInt)
//     } else if (n === 0) {
//         return n;
//     }
    
//     else {
//         stringInt = n.toString()
//     stringArr = stringInt.split('');

//     stringArr = stringArr.reduce((acc, currentItem) => currentItem + acc, '').split('');

//     for (let i = 0; i < stringArr.length; i++) {
//         if(stringArr[0] < 1) {
//             stringArr.shift();
//         } 
//     }
//     stringArr = stringArr.join('')
//     console.log(stringArr);
//     console.log(parseInt(stringArr));
//     return parseInt(stringArr)
//     }
    
    
    
// }


// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');
//     if(n < 0) {
//        return -Math.abs(parseInt(reversed));
//        return parseInt(reversed) * -1;
//    }
//     return parseInt(reversed)
      
//    }

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');
   
    return parseInt(reversed) * Math.sign(n);
      
   }

reverseInt(-1087650)
module.exports = reverseInt;
