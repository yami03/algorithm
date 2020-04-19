# Average of Levels in Binary Tree
Link: https://leetcode.com/problems/average-of-levels-in-binary-tree/

Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

**Example 1:**

```
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
```

**Note:**
1. The range of node's value is in the range of 32-bit signed integer.

## Solution

```js
var averageOfLevels = function(root) {
    
    const depthMap = new Map();
    const result = [];
    
    function recursion(node, level) {
        !depthMap.has(level) ? depthMap.set(level, [node.val]) : depthMap.get(level).push(node.val);
        
        if(node.left) recursion(node.left, level + 1)
        if(node.right) recursion(node.right, level + 1)
        
        return;
    }
    
    recursion(root, 0);
    
    for (let [key, value] of depthMap) {
      result[key] = value.reduce((prev, next) => prev + next)/value.length;
    }
    
    return result;
};
```

## Result 
Runtime: 120 ms, faster than 6.50% of JavaScript online submissions for Average of Levels in Binary Tree.
Memory Usage: 38.8 MB, less than 100.00% of JavaScript online submissions for Average of Levels in Binary Tree.

확실히 Codewars 할 때보다 팩폭을 많이 당한다. 🤣 🤦‍♀️

순회를 2번 하는게 아쉬웠다.
Binary Tree를 순회하는 방법은 여러가지가 있는데 depth로 순회를 주로했으니 이번에도 똑같은 방법으로 순회하였지만 여기서 중요한건 level 순회..
그래서 level로 담아서 다시 순회하는 안타까운 방법으로 함.. 


### User Solution

```js
var averageOfLevels = function(root) {
    q = []
    res = []
    if(root){
        q.push(root)
    }
    while(q.length >0){
        let numNodes = q.length // while문을 종료시키는 변수 
        let currLength = q.length // 전체 length를 저장해놓아 나중에 평균을 계산할 때 사용한다. 
        let currSum = 0
        while(numNodes > 0){
            let node = q.shift()
            currSum+=node.val
            // 순회를 하면서 다음 level를 저장한다.
            if(node.left){
                q.push(node.left)
            }
            if(node.right){
                q.push(node.right)
            }
            numNodes--
        }
        res.push(currSum / currLength)
    }
    return res
};
```

queque 역할을 하는 변수에 담아서 level로 순회하는 구조로 짜여져 있다.
그리고 순회를 하면서 left, right를 탐색하여 다음 level까지 함께 준비한다. 😭


