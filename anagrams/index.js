// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const updatedStrA = stringA.replace( /\W/g , "").toLowerCase();
    const updatedStrB = stringB.replace( /\W/g , "").toLowerCase();
   
       return (updatedStrA.split("").sort().join("") === updatedStrB.split("").sort().join(""))
   }  
 
   anagrams('Hi there', 'Bye there') 

module.exports = anagrams;


//split each string into array... iterate through arrays and if stringObj[elem] exists.. then add one... else stringObj[elem] = 1
//iterate through objB... and if objA[key] does not exist or is not equal to objB[key] then return false... else return true


// const objA = buildCharMap(stringA.replace( /\W/g , "").toLowerCase());
// const objB = buildCharMap(stringB.replace( /\W/g , "").toLowerCase());

// if(stringA.replace( /\W/g , "").toLowerCase().length === stringB.replace( /\W/g , "").toLowerCase().length){
//   for(let key in objB){
//       if(objA[key] !== objB[key]){
//           return false
//       } 
//   }
// } else{
//  return false;
// }

// return true;
// }  

// function buildCharMap(str){
// const charMap = {};
// for(let char of str){
// charMap[char] = charMap[char] + 1 || 1;
// }
// console.log(charMap)
// return charMap;