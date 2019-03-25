//두 정수 a,b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴
//예를 들어 a = 3, b = 5인 경우, 3+4+5 = 12이므로 12를 리턴
//a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
//a와 b는 -10,000,000이상 10,000,000 이하인 정수입니다.
//a와 b의 대소관계는 정해져있지 않습니다.

function solution(a, b) {
    var numArray = [a, b];
    var numSort = numArray.sort((a, b) => a - b);
    if (numSort[0] === numSort[1]) return numSort[0];

    var numPlus = numSort[0] + numSort[1];
    var multiplicand = parseInt((numSort[1] - numSort[0]) / 2);

    if ((numSort[1] - numSort[0]) % 2 === 0) {
        return numPlus * multiplicand + (numPlus / 2);
    } else {
        return numPlus * (multiplicand + 1);
    }
}

console.log(solution(3, 5)); //12 
console.log(solution(3, 3)); //3 
console.log(solution(5, 3)); //12 