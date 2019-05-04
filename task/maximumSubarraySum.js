/*
* 가장 큰 부분배열의 합
*
* 여러분은 주어진 배열에서 가장 큰 연속된 부분배열 합을 찾아야 합니다.
* 예를들면, [-2, 1, -3, 4, -1, 2, 1, -5, 4]에서 배열의 모든 연속된 원소를 더한다면,
* (-2) + 1 + (-3) + 4 + (-1) + 2 + 1 + (-5) + 4 === 1 이 됩니다.
* 많은 원소를 더한다고 합이 크지는 않습니다. 가장 큰 연속된 부분배열 합을 찾는다면,
* 4 + (-1) + 2 + 1 === 6 이 됩니다. 이때의 연속된 부분배열은 [4, -1, 2, 1]이 됩니다.
*
* 만약 배열의 원소가 모두 0보다 큰 양수라면 가장 큰 부분배열의 합을 찾기 굉장히 쉽겠죠!
* 혹은 배열의 원소가 모두 음수라면, 이때는 []가 가장 큰 합을 갖는 부분배열이 되고 함수는 0을 반환하게 됩니다.
* 빈 배열 []의 경우는 가장 큰 부분배열 합이 0이라고 간주됩니다.
* 아래 주어진 함수를 완성해서, 가장 큰 부분배열의 합을 반환하도록 완성해주세요!
*
* @param {number[]} arr
* @return {number}
*/

function maxSubarraySum(arr) {
  // Complete the maxSubarraySum function.
  let total = 0;
  let newArr = [];

  // 원소 모두가 양수로만, 음수로만 구성되어 있는지 판별
  const negative = arr.every(elem => elem <= 0);
  const positive = arr.every(elem => elem >= 0);  
  
  if (negative) {
    console.log(0);
  }
  if (positive) {
    console.log(arr.reduce((prev, curr) => prev + curr));
  }

  //가장 큰 연속된 배열 구하기 
  //slice를 이용해 구한다'ㅁ'... 
  

}

maxSubarraySum([1,2,3,4])


