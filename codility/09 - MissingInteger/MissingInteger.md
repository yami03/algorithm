# Lesson 4 - MissingInteger

링크: https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

This is a demo task.

Write a function:

> ```
> function solution(A);
> ```

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an **efficient** algorithm for the following assumptions:

> - N is an integer within the range [1..100,000];
> - each element of array A is an integer within the range [−1,000,000..1,000,000].

## Solution

```js
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const obj = {};
    const Alength = A.length;
    
    for(let i = 0; i < Alength; i++) {
        obj[A[i]] = i;
    }
    
    for(let i = 1; i <= Alength; i++) {
        if(!obj.hasOwnProperty(i)) return i; 
    }
    
    return Alength + 1
}
```

할 수 있는 걸 하면 능률이 오르진 않지만.. 
그래도 재밌디.. ㅎ



역시 LeetCode가 짱이다.. 다음엔 LeetCode ㄱ ㄱ