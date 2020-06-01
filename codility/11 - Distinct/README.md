# Distinct

https://app.codility.com/programmers/lessons/6-sorting/distinct/

# Task description

https://app.codility.com/programmers/lessons/6-sorting/distinct/

# Solution

```js
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    obj = {};
    A.forEach((el, index) => obj[el] = index);
    

    return Object.keys(obj).length;
}
```

# Result
Task Score: 100%

Correctness: 100%

Performance: 100%

할 수 있는걸 찾아서 한 문제.. 🤦‍♀️
