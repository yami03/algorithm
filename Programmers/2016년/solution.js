//2016년 a월 b일은 무슨 요일일까요?
//요일의 이름은 SUN,MON,TUE,WED,THU,FRI,SAT 리턴합니다.
//a = 5, b = 25일 때 result는 "TUE" 입니다.

function solution(a, b) {
    var date = new Date(2016, a - 1, b);
    var dayArray = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    return dayArray[date.getDay()];
}

console.log(solution(4, 27)); //4월 27일은 "WED"
console.log(solution(12,24)); //12월 24일은 "SAT"