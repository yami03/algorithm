/*
* 컵 돌리기 게임
*
* 세 개의 뒤집힌 컵 중 한 개의 컵 안에 열쇠가 있습니다.
* 당신이 열쇠를 찾기 위해 컵을 들어올리려는 순간, Drogon이 빠르게 컵의 위치를 뒤섞기 시작합니다.
* 컵의 교환이 끝났을 때, 열쇠가 들어있는 컵을 찾아야 합니다.
*
* - 컵의 위치는 인덱스로 표현됩니다. (0부터 시작)
* - 키가 들어있는 컵의 인덱스와 교환된 컵의 인덱스를 나타내는 배열(swaps)을 입력으로 받습니다.
*
* 예를들어, 열쇠가 들어있는 컵의 처음 위치가 `0`이고 컵이 교환되는 순서가 다음과 같다면 [(0, 1), (1, 2), (1, 0)]
* - 첫 교환때 열쇠가 있는 컵은 0 에서 1로 이동하게 됩니다.
* - 두번째 교환때 열쇠가 있는 컵은 1 에서 2로 이동하게 됩니다.
* - 마지막 교환때 1에 있는 컵이 0으로 가지만, 열쇠가 있는 컵에는 영향을 미치지 않습니다.
* - 따라서 열쇠가 있는 컵의 위치는 2가 됩니다.
*
* swaps = [[0, 1], [1, 2], [1, 0]]
* firstPosition = 0
* findKey(firstPosition, swaps) == 2
*
* 컵의 갯수는 최소한 두 개 이상입니다.
*
* @param {number} start
* @param {number[]} swaps
* @return {number}
*/

// 아래의 export default 키워드는 '아직' 신경쓰지 않으셔도 됩니다. :)
function findKey(start, swaps) {
    // Complete the findKey function.
    let position = start;
    const startIdx = 0;
    const endIdx = 1;
    
    swaps.forEach(cup => {

        //첫번째 위치와 두번째위치에 이동한 숫자와 일치하는지 판별 
        if (cup[startIdx] === position) {
            position = cup[endIdx];
        } else if (cup[endIdx] === position) {
            position = cup[startIdx];
        }

    });
    return position;
}


