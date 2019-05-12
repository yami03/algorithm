/*
* 섬 찾기
*
* 2차원 지도를 나타내는 string에서, 섬의 개수가 몇 개인지 찾아주세요!
* 주어진 string에는 다음과 같은 규칙이 있습니다.
*
* - 육지는 '0'으로 나타납니다.
* - 바다는 '.'으로 나타납니다.
* - 2차원 맵의 한 줄(row)은 '\n'으로 나타납니다.
* - 두 개의 '0'이 인접(상/하/좌/우)해있다면, 같은 육지로 생각합니다.
*
* 예를 들어,
* ".0...\n.00..\n....0" 를 입력으로 받는다면,
*
* .0...
* .00..
* ....0
* 로 표현될 수 있습니다. 여기에는 '0'세개로 이루어진 섬 하나와, '0'하나로 이루어진 섬한개, 총 두개의 섬이 있습니다.
*
* ..000.
* ..000.
* ..000.
* .0....
* ..000.
* 여기에는 총 3개의 섬이 있습니다. 여러분은 섬의 개수가 총 몇개인지 함수에서 반환해주면 됩니다!
*
* @param {string} mapString
* @return {number}
*/

// 아래의 export default 키워드는 '아직' 신경쓰지 않으셔도 됩니다. :)
function countIslands(mapStr) {
  // Complete the countIslands function.
  let totalCount = 0;
  const arrRow = mapStr.split('\n');
  // 이전 row의 index 값 
  let beforeZeroIdx = [];
  // 현재 row의 index 값
  let ZeroIdx = [];
  // 연속되는 숫자의 index값
  let continuousNum = [];

  for (let i = 0; i < arrRow.length; i++) {

    for (let j = 0; j < arrRow[i].length; j++) {

      if (arrRow[i][j] === '0') {
        ZeroIdx.push(j);
        continuousNum.push(j);
      } 
      
      if ((arrRow[i][j] === '.' && continuousNum.length !== 0) || (j === (arrRow[i].length - 1) && continuousNum.length !== 0)) {
        //console.log(`i값과 j값은 ${i}/${j}`);

        if (beforeZeroIdx.length === 0) { //2차원 지도의 첫번째 줄이거나 이전 줄이 ...의 연속일 때 
          totalCount += 1;
          
        } else {
          
          outer: for (let k = 0; k < beforeZeroIdx.length; k++) {
            for (let l = 0; l < continuousNum.length; l++) {
              if (beforeZeroIdx[k] === continuousNum[l]) {
                break outer;
              }
            }
            if (k === beforeZeroIdx.length - 1) {
              totalCount += 1;
            }
          }
        }
        continuousNum = [];
      } 
      //console.log(`${i},${j}와 count는 ${totalCount}`);
    }
    beforeZeroIdx = ZeroIdx;
    ZeroIdx = [];
    continuousNum = [];
  }
  return totalCount;
}


//console.log(countIslands('00...0'));
console.log(countIslands('0...0\n0...0\n00000'));
//[ '00...0', '0...00', '......', '0.0.0.', '0.....' ] 