//길이가 n(10,000이하인 자연수) 
//"수박수박수.."를 리턴하는 함수 
//n의 길이 수대로 리턴합니다.
//n이 3일 때 "수박수"를 리턴, n이 4일 때 "수박수박"을 리턴

function solution(n) {
    var answer = '';
    if (n % 2 === 1) {
        answer = '수박'.repeat(n / 2) + '수';
    } else if (n % 2 === 0) {
        answer = '수박'.repeat(n / 2);
    }
    return answer;
}

console.log(solution(3)); //"수박수"
console.log(solution(4)); //"수박수박"