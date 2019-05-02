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
  const opening = ['(','{','['];
  const closing = [')','}',']'];
  let match = 0;
  let groupClose = 0;
  let groupMiddle = 0;

  for (let i = 0; i < braces.length; i++) {
    match = opening.findIndex(opening => {
      return opening === braces[i];
    });

    //바로 다음 숫자에 닫는 괄호가 있을 경우 
    if (braces[i + 1] === closing[match]) {
      i++ 
    //닫는 괄호가 그룹 형태일 때 
    }else{
      
      //가장가까운 닫기를 찾는다.. 
      for (let j = i + 1; j < braces.length; j++) {
        if (braces[j] === closing[match]) {
          groupClose = j;
        } else if (j === braces.length-1){ 
          //끝까지 돌았는데 닫는 괄호를 못찾을 경우 
          return false;
        }
      };

      //그룹형태를 서로 값이 같은지 매치 시킨다. 
      groupMiddle = abs((i+ groupClose)/2);
      for (let k = i + 1; k <= groupMiddle; k++) {
          
      }

    }
    console.log(groupClose);
    break;
  }
}

validBraces('({})[]');