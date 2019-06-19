//Codewars: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// 중복 횟수 계산
// 대소 문자를 구분하지 않는 영문자와 숫자가 입력 문자열에 두 번 이상 나오는 횟수를 반환하는 함수를 작성하십시오.입력.자열은 영.자(대.자와 소.자 모두) W 숫자 만 포함한다고 가정 할 수 있습니다.

//   예
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice(`b` and`B`)
// "indivisibility" -> 1 # 'i' occurs six times
// " indivisibilities " -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let checkedArr = [];
  let textArray = text.toLowerCase().split('');
  let result = 0;

  textArray.forEach((element, index) => {
    if (!checkedArr.includes(element)) {
      textArray.forEach((nextElement, nextIndex) => {
        if (!checkedArr.includes(element) && element === nextElement && index !== nextIndex) {
          result++;
          checkedArr.push(element);
        }
      })
    }
  });
  return result;
}

assertEquals(duplicateCount(""), 0);
assertEquals(duplicateCount("abcde"), 0);
assertEquals(duplicateCount("aabbcde"), 2);
assertEquals(duplicateCount("aabBcde"), 2, "should ignore case");
assertEquals(duplicateCount("Indivisibility"), 1)
assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}
