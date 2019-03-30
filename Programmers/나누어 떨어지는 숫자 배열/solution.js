//arr에서 매개변수로 넣은 divisor로 나누어 떨어지는 배열의 원소를 오름차순으로 정렬한 배열을 반환
//divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환

//1.배열의 원소를 dvisior으로 나눴을 때 나머지가 0인 배열만 담는다.
//2.sort를 사용하여 정렬
//3.배열안의 원소가 하나도 없다면 -1를 리턴하고 아니면 배열을 리턴
function solution(arr, divisor) {
    var answer = arr.filter(num => num % divisor === 0);
    answer = answer.sort((a, b) => a - b);
    return answer.length === 0 ? [-1] : answer;
}

console.log(solution([5, 9, 7, 10],5)); //[5,10]
console.log(solution([2, 36, 1, 3], 1)); //[1,2,3,36]
console.log(solution([3,2,6],10)); //[-1]