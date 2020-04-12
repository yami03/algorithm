# Fibonacci Number


https://leetcode.com/problems/fibonacci-number/

The **Fibonacci numbers**, commonly denoted F(n) form a sequence, called the **Fibonacci sequence**,
such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

```
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).
```

**Example 1**:

```
Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
```

**Example 2**:

```
Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
```

**Example 3**:

```
Input: 4
Output: 3
Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 ```

**Note**:

0 ≤ N ≤ 30.

# Solution

  ```js
  /**
 * @param {number} N
 * @return {number}
 */
 
var fib = function(N) {
    if(N === 0) return 0;
    if(N === 1) return 1;
    function recursion(number, prev1, prev2) {
        if(number === N) return prev1 + prev2;
        return recursion(number + 1, prev2, prev1 + prev2);
    }
    
    return recursion(2, 0, 1);
};
  ```

피보나치 수열은 기본 알고리즘문제인데 할 때마다 새롭다..🤣

이전엔 재귀로 못풀었는데 이번엔 재귀로 풀기! 재귀에 많이 익숙해지고 싶당 

# result

Runtime: 80 ms
Memory Usage: 33.8 MB


## User Solution 

```js
/**
 * @param {number} N
 * @return {number}
 */
 
var fib = function(number) {
    const memo = new Map();
    memo.set(0, 0);
    memo.set(1, 1);
    
    const helper = (N) => {
        if (memo.has(N)) return memo.get(N);
    
        const result = helper(N-1) + helper(N-2);
        memo.set(N, result);
        return result
    }
    
    return helper(number)
};
```

나랑 다르게 한 점

나는 N-1과 N+1을 인자(argument)로 전달했다면 여기선 Map()을 이용하여 memo함

## Map이 무엇인가 ?

아무값이나 키와 값으로 사용할 수 있다.

object와 비슷하지만 object는 프로토타입을 갖기 때문에 이미 key가 있을 수 있다.

object의 key는 무조건 symbol과 string만 가질 수 있으나 Map은 아무값이나 가능하다! 

Map은 삽입 순으로 정렬이 가능하다. 

Map은 size로 크기를 알 수 있다! object는 Object.key()를 사용 ㅠ

Map은 for...of를 이용해 [key, value]로 순회할 수 있다.

잦은 키-값 쌍의 추가와 제거에서 더 좋은 성능을 보임??'ㅁ'?

마음에 들었던 점은

```js
let original = new Map([
  [1, 'one']
])

let clone = new Map(original)

console.log(clone.get(1))       // one
console.log(original === clone) // false (useful for shallow comparison)
```

clone을 했을 때 참조를 하는게 아니라는 것이다. 크읍
얕은 복사만 가능한거 같다.ㅠ

자바스크립트의 7가지 타입중 NaN도 key가 된다는건 신선하다.

```js
let kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use the regular Map constructor to transform a 2D key-value Array into a map
let myMap = new Map(kvArray)
```

array안에 array가 있는데 key와 value형태를 가지면 바로 Map으로 만들 수 있다.

또한 array의 메소드들을 사용할 수 있다는점도 맘에 들었다.

아쉬운 점은 object는 key, value를 가지지만

```js
const obj = { foo: 'bar', baz: 42 }; 
const map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```
Object.entries()를 사용해 꼭 array형태로 만들어 줘야 한다.

이전부터 new Map()이 뭐지 했는데.. 드디어 파악하게 되었댜.ㅠ
어려운것도 아니고 ㅠ왜그랬지.


**참고**

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
