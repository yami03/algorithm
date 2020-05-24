# CountDiv

Lesson 5 Prefix Sums의 첫번째 문제

## Task description

https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/

## Solution

```js
function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A === B && A === K) return 1;
    const middleValue = A >= K ? B - A : B;
    const isStartPointOrEndPointDivided = !(A%K) || !(B%K);
    return isStartPointOrEndPointDivided ? Math.floor(middleValue/K) + 1 : Math.floor(middleValue/K);
}
```

## Result
Task Score: 100%

Correctness: 100% 

Performance: 100%

수학문제에 가까웠던 문제. 

A - B 하면 쉽게 해결될 줄 알았지만.. [11, 345, 17] 일때 345 - 11을 해서 19가 나오게 됨.

이런 케이스나 같은 숫자가 들어왔을 때 케이스나 A - B 했을 때 A나 B가 K로 나뉘어지는 문제등 .. 

식은 금방 나왔지만 다양한 케이스로 여러번 하게 되었다. 😂
