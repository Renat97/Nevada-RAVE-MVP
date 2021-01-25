function BitmapHoles(strArr) {

  // Changing to 2D array because strings are immutable in JavaScript
  let bitmap = strArr.map(row => row.split(''));

  let count = 0;

  for (let row = 0; row < strArr.length; row++) {
      for (let col = 0; col < strArr[0].length; col++) {
          if (bitmap[row][col] === '0') {
              count++;
              markAdjacentHoles(bitmap, row, col);
          }
      }
  }

  return count;

  function markAdjacentHoles(bitmap, row, col) {

    console.log('row',row);
    console.log('col',col);
     console.log('bitmap', bitmap)

      // Check bounds
      if ((row > bitmap.length -1 || row < 0) || (col > bitmap[0].length - 1 || col < 0)) {
          return;
      }

      if (bitmap[row][col] === '0') {
          bitmap[row][col] = '4'; // Visited
          // Check adjacent
          markAdjacentHoles(bitmap, row - 1, col); // North
          markAdjacentHoles(bitmap, row + 1, col); // South
          markAdjacentHoles(bitmap, row, col + 1); // East
          markAdjacentHoles(bitmap, row, col - 1); // West

          /*
          markAdjacentHoles(bitmap, row + 1, col + 1); // South East
          markAdjacentHoles(bitmap, row + 1, col - 1); // South West
          markAdjacentHoles(bitmap, row - 1, col - 1); // North West
          markAdjacentHoles(bitmap, row - 1, col + 1); // North East
          */
      } else {
          return;
      }
  }
}

// keep this function call here
var strArr = ["10111", "10101", "11101", "11111"]
console.log(BitmapHoles(strArr));