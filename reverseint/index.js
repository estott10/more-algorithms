// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversedArr = n.toString().split("").reverse().join("");
        return parseInt(reversedArr) * Math.sign(n)
}

module.exports = reverseInt;


//if it's true the Math.sign === - 1 then... turn into string... 
//split into arr... then remove first character... (reverse.. join... parseInt)
// if Math.sign === 1 then ... turn into string ... split into arr... (reverse... join... parseInt)