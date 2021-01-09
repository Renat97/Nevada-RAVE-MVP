var matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]

var maximalSquare = function(matrix) {
  let rows = matrix.length;
  let cols = rows ? matrix[0].length : 0;
  let max = 0;
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          let left = col === 0 ? 0 : matrix[row][col - 1],
              up = row === 0 ? 0 : matrix[row - 1][col],
              back = row && col ? matrix[row - 1][col - 1] : 0;
          if (matrix[row][col] == 1) {
              matrix[row][col] = Math.min(left, up, back) + matrix[row][col] * 1;
          } else {
              matrix[row][col] = 0;
          };
          max = max > matrix[row][col] ? max : matrix[row][col];
      };
  };
  return max * max;
};

console.log(maximalSquare(matrix));