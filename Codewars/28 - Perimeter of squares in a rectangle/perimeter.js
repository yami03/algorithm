// Codewars Link: https://www.codewars.com/kata/perimeter-of-squares-in-a-rectangle/javascript
/* The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. 
* It 's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
*
* #Hint: See Fibonacci sequence

* #Ref: http: //oeis.org/A000045

* The function perimeter has for parameter n where n + 1 is the number of squares(they are numbered from 0 to n) and returns the total perimeter of all the squares.
*
* perimeter(5) should return 80
* perimeter(7) should return 216
*/

function perimeter(n) {
  if (n === 0) return 1;

  let fibonacci = [1, 1];
  for (i = 1; i < n; i++) {
    fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
  }
  return fibonacci.reduce((total, current) => total + current) * 4;
}

assertEquals(perimeter(5), 80);
assertEquals(perimeter(7), 216);
assertEquals(perimeter(20), 114624);
assertEquals(perimeter(30), 14098308);

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}

