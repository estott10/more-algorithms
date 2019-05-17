// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const splitStr = str.split("");
//     const newArr = []
//     for(let i = splitStr.length -1; i >= 0; i--){
//         newArr.push(splitStr[i])
//     }
//     return newArr.join("");
// }

function reverse(str) {
    
    let reversed = ""
    for(let char of str){
        reversed = char + reversed
    }
    return reversed;
}

module.exports = reverse;


// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// function reverse(str) {
    
//     let reversed = ""
//     for(let char of str){
//         reversed = char + reversed
//     }
//     return reversed;
// }

// function reverse(str) {
//     return str.split("").reduce( (reversed, char) => char + reversed, '')
  
// }
