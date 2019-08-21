// Codewars: https://www.codewars.com/kata/59d902f627ee004281000160

// Create a function that takes a list of one or more non-negative integers,
// and arranges them such that they form the largest possible number.

// Examples:

// largestArrangement([4, 50, 8, 145]) returns 8504145 (8-50-4-145)

// largestArrangement([4, 40, 7]) returns 7440 (7-4-40)

// largestArrangement([4, 46, 7]) returns 7464 (7-46-4)

// largestArrangement([5, 60, 299, 56]) returns 60565299 (60-56-5-299)

// largestArrangement([5, 2, 1, 9, 50, 56]) returns 95655021 (9-56-5-50-21)

const largestArrangement = array => {
  let copyArr = [...array];

  copyArr.sort(function(a, b){
    let strA = ''+a;
    let strB = ''+b;
    debugger;
    if(strA.length > strB.length) {
      const gap = strA.length - strB.length;
      strB = strB + strB[strB.length - 1].repeat(gap);
      return comparison(strA, strB);
    } else if (strA.length < strB.length) {
      const gap = strB.length - strA.length;
      strA = strA + strA[strA.length - 1].repeat(gap);
      return comparison(strA, strB);
    } else {
      return comparison(strA, strB);
    }
  });

  function comparison(a, b) {
    if(a < b) return 1;
    if(a > b) return -1;
    if(a === b) return 0;
  }

  return Number(copyArr.join(''));
}
