//단어 s(1이상 100이하의 스트링)의 가운데 글자를 반환하는 함수
//단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
//s가 "abcde"라면 리턴값은 "c"
//s가 "qwer"라면 리턴값은 "we"

function solution(s) {
    var answer = '';
    var sLength = s.length;
    var center = sLength / 2;
    if (sLength % 2 === 1) {
        answer = s.slice(center, center + 1);
    } else if (sLength % 2 === 0) {
        answer = s.slice(center - 1, center + 1);
    }
    return answer;
}

console.log(solution("abcde")); //c
console.log(solution("qwer")); //we