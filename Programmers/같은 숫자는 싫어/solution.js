//배열 arr의 각 원소는 숫자 0부터 9까지 이루어져 있습니다
//배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거
//배열 arr의 순서를 유재 해야합나다.
//arr = [1,1,3,3,0,1,1]이면 [1,3,0,1]을 return
//arr = [4,4,4,3,3]이면 [4,3]을 return

function solution(s) {
    var arr = s.filter((num, idx, arr) => {
        return idx === 0 || num !== arr[idx - 1];
    })
    return arr;

    //map filter차이점
}
//map일때는 true, false값을 리턴 
//filter일때는 배열내에서 걸러내서 리턴해준다.

console.log(solution([1,1,3,3,0,1,1])); // [1,3,0,1]
console.log(solution([4,4,4,3,3])); // [4,3]