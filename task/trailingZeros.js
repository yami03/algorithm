/*
* 꼬리에 붙은 0
*
* 주어진 숫자의 팩토리얼을 계산한 값에서, 마지막에 연속되어 붙어있는 0이 몇개인지 반환해주는 함수를 완성해주세요! (팩토리얼을 꼭 계산할 필요는 없습니다.)
*
* 참고로, N 팩토리얼이란 다음과 같은 것을 말합니다. (factorial은 !로 표기합니다. 더 많은 내용은  http://mathworld.wolfram.com/Factorial.html를 참고해주세요)
* N! = 1 * 2 * 3 * ... * N
*
* 예를들어,
* trailingZeros(6) = 1
* 왜냐하면, 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 , 끝에 1개의 0이 있습니다.
*
* trailingZeros(12) = 2
* 12! = 479001600 --> 2, 꼬리에 2개의 0이 있습니다.
*
* @param {number} n
* @return {number}
*/

// 0 - 4 까지 0개       4/5 = 0;
// 5 - 9 까지 1개       9/5 = 1;
// 10 - 14 까지 2개    14/5 = 2;
// 15 - 19 까지 3개    19/5 = 3;
// 20 - 24 까지 4개    24/5 = 4; 
// 25 - 29 까지 6개    29/5 = 5 / 5로 한번더 나눌 수 있어서 +1해서 6 
// 30 - 34 까지 7개    34/5 = 6 +1(5로 나눈 몫) = 7개
// 35 - 39 까지 8개    39/5 = 7 +1(몫) = 8개
// 40 - 44 까지 9개    44/5 = 8 +1(몫) = 9개
// 45 - 49 까지 10개   49/5 = 9 +1(몫) = 10개
// 50 - 54 까지 12까지 54/5 = 10 +2(몫) = 12개
// 100 - 104까지       104/5 = 20 +4(몫) = 24개
// 125 - 129 까지      129/5 = 25+5+1 = 31개
// 625 - 629 까지      629/5 = 125+25+5+1 = 156개
function trailingZeros (n) {
  let divisor = 5;
  let quotient = Math.floor(n / divisor);
  let result = quotient; 
  let index = 0
  
  //5로만 계속 나눈 후 몫을 구하기
  for (index; quotient >= divisor; index++) {
    quotient = Math.floor(quotient / divisor);
    result += quotient;
  }

  return result;
}

assertSimilar(trailingZeros(4), 0);
assertSimilar(trailingZeros(100), 24);
assertSimilar(trailingZeros(629), 156);
assertSimilar(trailingZeros(367419936), 91854977);

function assertSimilar(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}
