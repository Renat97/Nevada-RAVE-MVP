// A Maze is given as N*N binary matrix of blocks where the starting point is the upper left most block i.e., maze[0][0] and destination is the lower rightmost block i.e., maze[N-1][N-1]. A rat starts from the source and has to reach the destination. The rat can move in 4 directions, up, down, left, and right. The function should return an N*N binary matrix of the same size as the input matrix containing 1’s along the path traveled between the source and destination.
// In the maze matrix, 1 represents a wall that cannot be passed and 0 represents an open space that can be walked through.
// Example:
// The following Matrix...
// [ [ 0, 1, 1, 1 ],
//   [ 0, 0, 1, 0 ],
//   [ 1, 0, 1, 1 ],
//   [ 0, 0, 0, 0] ]
// Could be diagramed as follows...
// The output could be visualized as follows…
// The output matrix would look like this:
// [ [ 1, 0, 0, 0 ],
//   [ 1, 1, 0, 0 ],
//   [ 0, 1, 0, 0 ],
//   [ 0, 1, 1, 1] ]

// justification: we want to describe the route a rat can take to get to the end of the maze from [0,0] to [n-1,n-1]
// specification: input: matrix as a maze, output: matrix with path, constraints: none, edge cases: none
// explanation: increment n until we get to n-1, n-1, with n being the length of the matrix, and if we see a 1 value we don't go there. Only go where there is a 0 value
// approximation: above

var mar = [ [ 0, 1, 1, 1 ],[ 0, 0, 1, 0 ],[ 1, 0, 1, 1 ],[ 0, 0, 0, 0] ];


function ratMaze(matrix) {
  var rows = matrix.length;
  var cols = matrix[0].length;
  // go through the matrix (rows and columns)
  // end is
  var end = matrix[rows-1][rows-1];
  for(var row = 0; row < rows; row++) {
    for(var col = 0; col < cols; col++) {
    // check if there is a zero next to the index
      var top = matrix[row - 1, col -1];
      var right = matrix[row, col + 1];
      var left = matrix[row, col - 1];
      var bottom = matrix[row + 1, col];
      // if there is a zero next to the index and the spot is closer to [n-1,n-1] then the current spot then go there
      matrix[row - 1, col - 1], matrix[rows-1][rows -1]
      // if (rows - 1) - (row -1) > (rows - 1) - (row)
      // mark position as 1 so we cant go back
      matrix[row][col] = 1;

      if(row === rows - 1 && col === cols - 1) {
        return matrix;
      }

      if(top === 0) {
        row--;
      }
      if(right === 0) {
        continue;
      }
      if(left === 0) {
        col--;
      }
      if(bottom === 0) {
        row--;
      }
      // change the current value to 1 and go into the position that is a 0
        // find the correct 0 value to go into by subtracting [n-1,n-1] with the index's and see what is greater
      // repeat the loop

    }
  }
  // return matrix
  return matrix;
}
console.log(ratMaze(mar));


var makeNewMatrix = (matr) => {
  return matr[3][2];
}