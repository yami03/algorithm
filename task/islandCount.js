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
  const mapArr = mapStr.split('\n');
  let mapObject = {};
  let addState = false;
  let count = 0;

  // mapObject 객체에 line별로 '0'의 자리를 추가해 준다. 
  for (const key in mapArr) {

    let line = [];
    let continuity = [];

    //mapArr의 원소의 '0'을 찾는다.
    for (const i in mapArr[key]) {

      if (mapArr[key][i] === '0') {

        continuity.push(i);

      } else if (mapArr[key][i] === '.' && continuity.length) {

        line.push(continuity);
        continuity = [];

      }
    }

    //mapObject 객체로 만들기
    if (continuity.length) line.push(continuity);
    mapObject['line' + key] = line;
    line = [];
    continuity = [];

  }

  //동일한 수가 있는지 비교하기 - 비교후 같은 수가 있는 경우 배열에 add를 추가해 준다. 
  const mapObjectKeys = Object.keys(mapObject);

  for (let j = 0; j < mapObjectKeys.length; j++) {

    let mapObjectLine = mapObject['line' + j];

    for (let k = 0; k < mapObjectLine.length; k++) {

      if (mapObjectLine[k].includes('add')) continue;

      let compareArr = mapObjectLine[k];
      let newCompareArr = [];

      //다음라인의 value
      for (let l = j + 1; l < mapObjectKeys.length; l++) {

        if (!mapObject['line' + l].length) break;

        //다음줄 배열의 배열
        for (let m = 0; m < mapObject['line' + l].length; m++) {

          //비교할 요소의 원소 개수
          for (let n = 0; n < compareArr.length; n++) {

            let nextArr = mapObject['line' + l][m];

            //다음줄 요소에 비교대상 요소가 있다면
            if (nextArr.includes(compareArr[n])) {

              if (nextArr.includes('add')) {

                addState = true;

              } else {

                newCompareArr = newCompareArr.concat(nextArr);
                nextArr.push('add');

              }
              break;
            }
          }
        }

        //다음줄 검수가 끝나면 
        compareArr = newCompareArr;
        newCompareArr = [];

      }

      //배열의 배열 요소의 검수가 끝나면 
      if (addState === false) count++;
      addState = false;

    }
  }
  return count;
}


assertSimilar(countIslands('0...0\n0...0\n00000'), 1);
assertSimilar(countIslands('00...0\n0...00\n......\n0.0.0.\n0.....'), 5);
assertSimilar(countIslands('00000000000000000\n.....0..........0\n00..000.........0\n0...0...........0\n0...0...........0\n00000000000000000'), 1);
assertSimilar(countIslands('..000.\n..000.\n..000.\n.0....\n..000.'), 3);
assertSimilar(countIslands('..000.0....0..00.\n..000...0.000.0.0\n00.0.000.....000.\n.0.00.0.000.0....\n..0000..0....000.'), 11);
assertSimilar(countIslands('....0000000000000000\n....000000..........\n..0000...........0..\n....000.........00..\n.0000...........0...\n....................\n..00000000000000....\n....0000000.........\n......00............\n.00000.......0......\n.0000........0......\n.000000...0000000...\n...0000000......0000'), 5);
assertSimilar(countIslands('.0.0.000.\n.0.0.0...\n.000.000.\n.........\n.000.000.\n...0.0.0.\n.000.0.0.\n.........'), 4);

function assertSimilar(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}
