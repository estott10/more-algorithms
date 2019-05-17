// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let runningTotal = '';

    for(let i = 1; i <= n; i++){
        runningTotal += "#";
        let spaces = "";
        for(let g = n - i; g >= 1; g--){
        spaces += " ";
        }
        console.log(runningTotal + spaces);
    }
}

module.exports = steps;

//running total
//iterate starting with 1 with i as <= n
//running total += '#'
// console.log(runningTotal + " ") 