// Codewars Link: https://www.codewars.com/kata/54d7660d2daf68c619000d95

/* 

Common denominators

You will have a list of rationals in the form

[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 

where all numbers are positive ints.

You have to produce a result in the form

[ [N_1, D] ... [N_n, D] ] 

depending on the language (See Example tests)

in which D is as small as possible and

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

Example:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)] 

*/

function convertFrac(lst) {
  if (lst.length < 1) return '';

  const number = [2, 3, 5, 7];
  let denominators = [];
  let divisor = [];
  let conmon;
  let answer = '';
  
  for (let i = 0; i < lst.length; i++) {
    denominators.push(lst[i][1]);
  }
  
  let firstDenominators = [...denominators];

  for (let i = 0; i < number.length; i++) {
    let count = 0;
    let result = [];

    for (let j = 0; j < denominators.length; j++) {
      if (denominators[j] % number[i] === 0) {
        result.push(denominators[j] / number[i]);
        count+= 1;
      } else {
        result.push(denominators[j]);
      }
    }

    if (count >= 2) {
      divisor.push(number[i]);
      denominators = [...result];
      i = -1;
    }
  }
  
  if (divisor.length) {
    const cal1 = denominators.reduce((total, current) => total * current);
    const cal2 = divisor.reduce((total, current) => total * current);
    conmon = cal1 * cal2;
  } else {
    conmon = firstDenominators.reduce((total, current) => total * current);
  }

  let multiple = firstDenominators.map(num => conmon / num);

  for (let i = 0; i < lst.length; i++) {
    answer += `(${lst[i][0] * multiple[i]},${conmon})`;
  }
  
  return answer;
}

assertEquals(convertFrac([
  [1, 2],
  [1, 3],
  [1, 4]
]), '(6,12)(4,12)(3,12)');

assertEquals(convertFrac([
  [69, 130],
  [87, 1310],
  [3, 4]
]), '(18078,34060)(2262,34060)(25545,34060)');

assertEquals(convertFrac([]), '');

assertEquals(convertFrac([
  [1, 100],
  [3, 1000],
  [1, 2500],
  [1, 20000]
]), '(200,20000)(60,20000)(8,20000)(1,20000)');

assertEquals(convertFrac([
  [1, 1],
  [3, 1],
  [4, 1],
  [5, 1]
]), '(1,1)(3,1)(4,1)(5,1)');

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}

// Codewars Solution
/* 
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
} 
*/