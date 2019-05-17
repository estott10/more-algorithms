// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for(let i = 1; i <=n; i++){
      results.push([]);
  }
const startRow = 1;
const endRow = n-1;
const startColumn = 1; 
const endColumn = n-1;

  while(startRow <= endRow && startColumn <= endColumn){
    
    //first row
    for(let column = 1; column <= endColumn; column++){
        results[startRow][i] = column;
    }
    startRow++;

    //last column
    for(let remainingRows = 2; remainingRows <= endRow; remainingRows++){
        let upColumn = n;
        results[remainingRows][endColumn] = upColumn + 1;
        upColumn++;
    }
    endColumn--;
    //last row
    for(let column = endColumn; column >= startColumn; column--){
        let counter = 1;
        results[endRow][column] = results[endRow][endRow] + counter;
        counter++ 
    }
    endRow--
    //remaining first column
    for(let row = endRow; row >= startRow; row--){
        let counter = 1;
        results[row][startColumn]= results[endRow-1][1] + counter;
        counter++;
    }
    startColumn++;
    //remaining 2nd row(new start row)
    for(let column = startColumn; column <= endColumn; column++){
        let counter= 1;
        results[startRow][column] = results[startRow][0] + counter;
        counter++
    }
    startRow++;
    
    //remaining next to last column(new end row)
    for(let row = startRow; row >=endRow; row++){
        let counter = 1; 
        results[row][endColumn] = results[row][n-1] + counter;
        counter++
    }
    endColumn--
   
    //remaining new end row
     for(let column = endColumn; column >= startColumn; column++){
         let counter = 1;
         results[endRow][colum] = results[endRow][endColumn] + counter;
         counter++
     }
     endRow--
  }
}

module.exports = matrix;
