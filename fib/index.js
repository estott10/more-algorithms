// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if(n <= 2){
    return n-1;
  }

  return fib(n-1) + fib(n-2);
}

//******* UNDERSTAND MEMOIZATION!!! ******

module.exports = fib;


//return index + 1 === n (so n=10 ... fibArr[n-1])
//build array up to n-1 index
//next number === sum of previous two numbers
//length of array === n

// function fib(n) {
//     let fibArr = [0, 1];
  
//      for(let i = 2; i < n; i++ ){
//       fibArr.push(fibArr[i-1] + fibArr[i-2]);
//      }
//   return fibArr.pop()
//   }

// let fibArr = [0, 1];
//   let i = 2;

//   while(i < n){
//     fibArr.push(fibArr[i-1] + fibArr[i-2]);
//     i++
//    }
// return fibArr.pop()