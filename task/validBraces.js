/*
* 괄호 짝찾기
*
* 괄호들로 이루어진 string을 입력받아서, 괄호들의 순서가 올바른지 판단해주는 함수를 완성해주세요!
* 괄호들은 ()와 {}와 [], 이렇게 총 3가지 종류가 있습니다.
* 괄호들은 자기와 짝이 맞는 괄호를 만나야만 합니다.
* 다음의 예를 봐주세요,
* "(){}[]"   =>  True
* "([{}])"   =>  True
* "(}"       =>  False
* "[(])"     =>  False
* "[({})](]" =>  False
* "{}({})[]" =>  True
*
* @param {string} braces
* @return {boolean}
*/

// 아래의 export default 키워드는 '아직' 신경쓰지 않으셔도 됩니다. :)
function validBraces(braces){
  // Complete the validBraces function.
  const openings = ['(', '{', '['];
  const closings = [')', '}', ']'];
  let match = 0;
  let groupClose = 0;
  let groupMiddle = 0;
  let groupCloseloop = 0;

  for (let i = 0; i < braces.length; i++) {
    match = openings.findIndex(opening => {
      return opening === braces[i];
    });

    //여는 괄호를 못찾은 경우 
    if (match === -1) {
      return false;

      //바로 다음 숫자에 닫는 괄호가 있을 경우 
    } else if (braces[i + 1] === closings[match]) {
      i++

      //괄호가 그룹 형태일 때 
    } else {

      //가장가까운 닫는 괄호를 찾는다.. 
      outer: for (let j = i + 1; j < braces.length; j++) {
        for (let k = 0; k < closings.length; k++) {
          if (braces[j] === closings[k]) {
            groupMiddle = j;
            break outer;
          } else if (j === braces.length - 1) {
            return false;
          }
        }
      };

      //그룹형태의 괄호들을 매치 시킨다.
      groupClose = groupMiddle * 2 - i - 1;
      groupCloseloop = groupClose;

      for (let l = i; l < groupMiddle; l++) {

        if (l !== i) {
          match = openings.findIndex(opening => {
            return opening === braces[l];
          });

          if (match === -1) {
            return false;
          }

        } else if (braces[groupCloseloop] === closings[match]) {

          groupCloseloop--

        } else {
          return false;
        }
      }
      i = groupClose;
    }
  }
  return true;
}

assertSimilar(validBraces('(((((((((((())))))))))))'), true);
assertSimilar(validBraces('())({}}{()][]['), false);
assertSimilar(validBraces('[]{}[](){}()[](){}'), true);
assertSimilar(validBraces('[]{}[](){}()[](){}{'), false);
assertSimilar(validBraces('()[()]{{()}}(((((((((((())))))))))))'), true);
assertSimilar(validBraces('()[()]{{()}}(((((((((((()))))))))))'), false);
assertSimilar(validBraces('{[]}([{}])[][[({})]]()([[{}]])[]{(())}'), true);
assertSimilar(validBraces('{[]}([{}])[][[({})]]()([[{}]])[]{(())'), false);

function assertSimilar(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}