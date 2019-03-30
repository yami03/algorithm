//문자열 s를 숫자로 변환한 결과를 반환하는 함수 
//s의 맨 앞에는 +/-가 올 수 있다.
//s는 숫자로만 이루어짐
//s는 "0"으로 시작하지 않음

function solution(s) {
  var answer = 0;
  answer = Number(s);
  return answer;
}

console.log(solution('1234')) //1234
console.log(solution('-1234')) //-1234

