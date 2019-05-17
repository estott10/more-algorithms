// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const countObj = {};
  let highestCount = 0
  let result;

  for(let char of str){
countObj[char] = countObj[char]++ || 1;
      }

  for(var key in countObj){
    if(countObj[key] > highestCount){
        highestCount = countObj[key];
        result = key
    }
  }
  return result
}
module.exports = maxChar;


//form object with element as key and value as count of occurrances of key
