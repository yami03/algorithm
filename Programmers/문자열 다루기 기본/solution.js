//문자열 길이가 4 혹은 6
//숫자로만 구성되어 있는지 확인해주는 함수

//1. short circuit 을 이용해 length의 개수를 체크
//2. 개수를 체크하는 부분을 괄호로 묶어준다.
//3. 정규식을 이용해서 글자가 포함되어있는지 확인
//4. null 값이 나오면 숫자만 구성된걸로 true를 리턴해준다.

function solution(s) {
    return (s.length == 4 || s.length == 6) && s.match(/[^0-9]+/) === null;
}

console.log("a234"); //false
console.log("1234"); //ture