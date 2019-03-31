//정수를 담고 있는 배열 arr의 평균값을 return하는 함수

//1.reduce를 이용해 배열의 총합을 구한다.
//2.reduce를 이용한값을 total변수에 담은 후 배열 arr의 개수를 구한 후 그 개수로 나눠준다.
function solution(arr) {
    const total = arr.reduce((total, num) => total + num, 0);
    const average = total / arr.length;
    return average;
}

console.log(solution([1,2,3,4])); //2.5
console.log(solution([5, 5])); //5