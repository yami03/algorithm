// Codewars Link: https://www.codewars.com/kata/snail

// Snail Sort

// Given an n x n array,
// return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// snail(array)# => [1, 2, 3, 6, 9, 8, 7, 4, 5]

// For better understanding, please follow the numbers of the next array consecutively:

//   array = [
//     [1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]
//   ]
// snail(array) => [1, 2, 3, 4, 5, 6, 7, 8, 9]

function snail(arr) {
  let i;
  let result = [];
  let loop = ['right','down', 'left', 'up']

  const direction = {
    right() {
      let line = [];

      if (i === 0) {
        line = arr[0];
      } else {
        lineIndex = i/4;
        line = arr[lineIndex].slice(lineIndex, arr[lineIndex].length - lineIndex);
      }
      return result.push(...line);
    
    },

    down() {
      let line = [];
      let start = i === 1 ? 1 : (i - 1) / 4 + 1;

      for (let j = start; j < arr.length - (start - 1); j++) {
        line.push(arr[j][arr.length - start]);
      }

      return result.push(...line);
    }, 

    left() {
      let line = [];
      let start = i === 2 ? 0 : (i - 2) / 4; 
      let startLine = arr.length - (start + 1);
      let end = -start -1;
      
      line = arr[startLine].slice(start, end).reverse();

      return result.push(...line);
    }, 

    up() {
      let line = [];
      let start = (i + 1) / 4;
      
      for(let j = start; j < arr.length - start; j++){
        line.push(arr[j][start - 1]);
      }

      return result.push(...line.reverse());
    }
  };

  for (i = 0; i < arr.length * 2 - 1; i++) {
    let name = i > 3 ?  i % 4 : i; 
    direction[loop[name]]();
  }

  return result;
}


console.log(assertDeepEquals(snail([
  []
]), []));
console.log(assertDeepEquals(snail([
  [1]
]), [1]));
console.log(assertDeepEquals(snail([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]), [1, 2, 3, 6, 9, 8, 7, 4, 5]));
console.log(assertDeepEquals(snail([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]));
console.log(assertDeepEquals(snail([
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11]
]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]));

function assertDeepEquals(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  };
  return true;
};

// Codewars Solution 
/* snail = function (array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
} */