// @param {string} phone_number -- 전화번호 문자열
//전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수

//1. repeat를 이용해 문자열 length의 -4값을 전부 *로 찍는다.
//2. slice를 이용해 번호의 나머지4자리를 알아낸다.
//3. 1번과 2번을 Template Literals를 이용해 합쳐 return 한다.
function solution(phone_number) {
    return `${'*'.repeat(phone_number.length - 4)}${phone_number.slice(-4)}`;
}

console.log(solution("01033334444")); //"*******4444"
console.log(solution("027778888")); //*****8888

