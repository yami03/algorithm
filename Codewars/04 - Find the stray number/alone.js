/* https://www.codewars.com/kata/find-the-stray-number/train/javascript
*  한 개의 숫자를 제외하고 모든 정수가 동일한 홀수를 가진 배열이 있다.
*  여기서 한 개의 숫자를 반환한다.
*  EX)
*  [1, 1, 2] ==> 2
*  [17, 17, 3, 17, 17, 17, 17] ==> 3
*/

// @param {Array} numbers
function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j && numbers[i] == numbers[j]) {
                break;
            } else if (j == numbers.length-1){
                return numbers[i];
            }    
        }
    }
}

assertSimilar(stray([1, 1, 2]), 2);
assertSimilar(stray([17, 17, 1, 17, 17, 17]), 1);

function assertSimilar(ret, correctRet) {
    if (ret === correctRet) {
        return console.log(`success: ${ret} as expected.`);
    }
    console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}

/* best 답안

function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}

const stray = nums => nums.reduce((a, b) => a ^ b);

*/