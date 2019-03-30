//문자열 s에 대소문자가 섞여있음
//s에서 'p'의 개수와 'y'의 개수를 비교해서 같으면 true, 다르면 false
//'p','y' 모두 하나도 없는 경우 항상 true를 리턴 
//대소문자는 구별하지 않는다.

//1.문자열을 대문자로 만든다
//2. for문으로 'p'와 'y'의 개수를 각각 구한다.
//3. 같다면 true, 다르면 false를 리턴해준다.
function solution(s) {
    var pNumber = 0;
    var yNumber = 0;

    for (var i = 0; i < s.length; i++) {
        if (s.toUpperCase().charAt(i) === 'P') {
            pNumber += 1
        } else if (s.toUpperCase().charAt(i) === 'Y') {
            yNumber += 1
        }
    }

    return pNumber === yNumber ? true : false
}

console.log(solution('pPoooyY')) //true
console.log(solution('Pyy')) //false