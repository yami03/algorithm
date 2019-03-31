//stirng형 배열 seoul의 element중 "Kim"의 위치 x를 찾아 "김서방은 x에 있다"는 string을 반환하는 함수 solution을 완성
//seoul 배열에서 "Kim"은 오직 단 한번 리턴된다.

//1. findIndex를 이용해 seoul배열에서 "Kim"의 index번호를 찾아낸다.
//2. Template Literals 방식을 이용해 return해준다.
function solution(seoul) {
  var nameIndex = seoul.findIndex(name => name === "Kim");
  return `김서방은 ${nameIndex}에 있다`;
}

console.log(solution(["Jane","Kim"])); //"김서방은 1에 있다"