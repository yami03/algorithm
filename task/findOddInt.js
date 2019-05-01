/*
* 홀수 번 나타나는 정수 찾기
*
* 주어진 배열에서, 홀수 번 나타나는 정수를 찾아주세요. 단, 홀수 번 나타나는 정수는 항상 한개뿐입니다.
* 예를들어, [1, 1, 1, 1, 10] 에서 1은 4번 나타나고, 10은 1번 나타나므로, 홀수 번 나타나는 정수는 10 입니다.
*/

// @param { Array } n
// 아래의 export default 키워드는 '아직' 신경쓰지 않으셔도 됩니다. :)
function findOddInt (n) {
  // Complete the findOddInt function.
  let newN = [];
  let overlap = false;
  let count = 1;

  n.forEach((num,idx) => {
    // 이전 체크한 숫자인지 체크한다.
    for (const newNum of newN) {
      if (num === newNum) {
        overlap = true;
        break;
      }
      overlap = false;
    }

    // 이전에 체크한 숫자가 아니라면, 
    if (!overlap || idx === 0) {
      newN.push(num);

      // num 의 index 다음자리부터 개수를 체크
      for (let checkNum = (idx+1); checkNum < n.length; checkNum++) {
        if (n[checkNum] === num) count++;
      }

      // 홀수 개수인지 체크
      if (count%2 === 1){
        console.log(num);
      }

    }
    count = 1;
  });
}

findOddInt([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
