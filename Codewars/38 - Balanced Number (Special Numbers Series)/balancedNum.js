// Codewars Link: https://www.codewars.com/kata/balanced-number-special-numbers-series-number-1/javascript

/*

Notes
If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

Number passed is always Positive .

Return the result as String

Input >> Output Examples
1- balancedNum (7) ==> return "Balanced"   .
Explanation:
Since , The sum of all digits to the left of the middle digit (0)

and the sum of all digits to the right of the middle digit (0) are equal , then It's Balanced

2- balancedNum (295591) ==> return "Not Balanced" .
Explanation:
Since , The sum of all digits to the left of the middle digits (11)

and the sum of all digits to the right of the middle digits (10) are equal , then It's Not Balanced

Note : The middle digit(s) are 55 .

3- balancedNum (959) ==> return "Balanced"  .
Explanation:
Since , The sum of all digits to the left of the middle digits (9)

and the sum of all digits to the right of the middle digits (9) are equal , then It's Balanced

Note : The middle digit is 5 .

4- balancedNum (27102983) ==> return "Not Balanced".

*/

function balancedNum(number)
{
  var le = String(number).length;
  var left;
  var right;
  var half = Math.floor(le / 2);

  if(le === 1 || le === 2) return "Balanced";

  if(le % 2 === 0) {
    left = String(number).slice(0, half - 1).split('');
    right = String(number).slice(half + 1).split('');
  } else {
    left = String(number).slice(0, half).split('');
    right = String(number).slice(half+1).split('');
  }

  let totalLeft = left.reduce((total, current) => Number(total) + Number(current), 0);
  let totalRight = right.reduce((total, current) => Number(total) + Number(current), 0);

  if(totalLeft === totalRight) return "Balanced";
  return "Not Balanced";
}

assertEquals(balancedNum(959), "Balanced");
assertEquals(balancedNum(13), "Balanced");
assertEquals(balancedNum(432), "Not Balanced");
assertEquals(balancedNum(424), "Balanced");

assertEquals(balancedNum(1024), "Not Balanced");
assertEquals(balancedNum(66545), "Not Balanced");
assertEquals(balancedNum(295591), "Not Balanced");
assertEquals(balancedNum(1230987), "Not Balanced");
assertEquals(balancedNum(56239814), "Balanced");


function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}