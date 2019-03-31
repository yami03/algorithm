//정수 num이 짝수일 경우 "Even"을 반환, 홀수일 경우 "Odd"를 반환하는 함수
//O은 짝수입니다.

//1.나머지 값을 이용해서 홀짝을 구별한다.
//2.그 값은 answer변수에 담아 return 한다.
function solution(num) {
    var answer = '';
    if (num % 2 === 0) {
        answer = "Even"
    } else {
        answer = "Odd"
    };
    return answer;
}

console.log(solution(3)); //"Odd"
console.log(solution(4)); //"Even"