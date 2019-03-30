//n은 0이상 3000이하인 자연수
//자연수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수 

//1. 총 수를 구할 total 변수를 만든다
//2. 약수를 for문을 이용해 1~n까지 돌려서 나눴을 때 나머지가 0이 되는 수를 구한다.
//3. 나머지가 0일 때 total변수에 더해준다.
function solution(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) total += i;
  }
  return total;
}

console.log(solution(12)); //28
console.log(solution(5)); //6