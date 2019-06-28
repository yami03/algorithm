// Codewars Link : https://www.codewars.com/kata/rectangle-into-squares/javascript

// The drawing below gives an idea of how to cut a given "true" rectangle into squares
// ("true" rectangle meaning that the two dimensions are different).

// Can you translate this drawing into an algorithm?

// You will be given two dimensions

// a positive integer length (parameter named lng)
// a positive integer width (parameter named wdth)

// You will return an array or a string (depending on the language; Shell bash, PowerShell and Fortran return a string) with the size of each of the squares.

// sqInRect(5, 3) should return [3, 2, 1, 1]
// sqInRect(3, 5) should return [3, 2, 1, 1]
// or (Haskell)
// squaresInRect  5  3 `shouldBe` Just [3,2,1,1]
// squaresInRect  3  5 `shouldBe` Just [3,2,1,1]
// or (Fsharp)
// squaresInRect  5  3 should return Some [3,2,1,1]
// squaresInRect  3  5 should return Some [3,2,1,1]
// or (Swift)
// squaresInRect  5  3 should return [3,2,1,1] as optional
// squaresInRect  3  5 should return [3,2,1,1] as optional
// or (Cpp)
// sqInRect(5, 3) should return {3, 2, 1, 1}
// sqInRect(3, 5) should return {3, 2, 1, 1}
// (C)
// C returns a structure, see the "Solution" and "Examples" tabs.
// Your result and the reference test solution are compared by strings.

function sqInRect(lng, wdth) {
  if (lng === wdth) return null;

  let result = [];

  let minNumber = Math.min(lng, wdth);
  let maxNumber = Math.max(lng, wdth);

  while (minNumber !== 0) {
    result.push(minNumber);
    maxNumber -= minNumber;
    let number1 = maxNumber;
    let number2 = minNumber;

    maxNumber = Math.max(number1, number2);
    minNumber = Math.min(number1, number2);
  }

  return result;
}

console.log(assertSimilar(sqInRect(5, 5), null));
console.log(assertSimilar(sqInRect(5, 3), [3, 2, 1, 1]));
console.log(assertSimilar(sqInRect(3, 5), [3, 2, 1, 1]));
console.log(assertSimilar(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]));

function assertSimilar(obj1, obj2) {
  if (!obj1 && !obj2) return true;
  for (let i = 0; i < obj1.length; i++) {
    if (obj1[i] != obj2[i]) return false
  };
  return true;
};


// codewars Solution

// function sqInRect(a, b, initial = true) {
//   if (a === b) {
//     return initial ? null : [a]
//   }
//   const min = Math.min(a, b)
//   const max = Math.max(a, b)

//   return [min, ...sqInRect(max - min, min, false)]
// }
