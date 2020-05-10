# Merge Two Binary Trees
Link: https://leetcode.com/problems/merge-two-binary-trees/

## Description

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

**Example 1:**
```js
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7                  
Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
```

## Solution
```js
var t1 = {
  val: 1,
  left:
  {
    val: 3,
    left: { val: 5, left: null, right: null },
    right: null
  },
  right: { val: 2, left: null, right: null }
}

var t2 = {
  val: 2,
  left:
  {
    val: 1,
    left: null,
    right: { val: 4, left: null, right: null }
  },
  right:
  {
    val: 3,
    left: null,
    right: { val: 7, left: null, right: null }
  }
}

var mergeTrees = function (t1, t2) {
  function accessLevel(tree) {
    const values = [];
    let queue = [tree];
    let nodeCount = queue.length;

    while (nodeCount) {
      let currentCount = nodeCount;
      const newQueue = [];

      while (currentCount) {
        queue[0] ? values.push(queue[0].val) : values.push(null);
        if (queue[0] && (queue[0].left || queue[0].right)) newQueue.push(queue[0].left, queue[0].right);
        currentCount--;
        queue.shift();
      }

      queue = newQueue;
      nodeCount = queue.length;
    }

    return values;
  }

  let t1Array = accessLevel(t1);
  let t2Array = accessLevel(t2);

  const max = Math.max(t1Array.length, t2Array.length);

  const largeArray = max === t1Array.length ? t1Array : t2Array;
  let smallArray = largeArray === t1Array ? t2Array : t1Array;

  return largeArray.map((el, index) => {
    return smallArray[index] ? el + smallArray[index] : el
  })
};

console.log(mergeTrees(t1, t2))
```

## 결과

return 값이 왜 자꾸 `[undefined]` 인지 한참 찾아봄
이유는 주석을 무시한 탓이였다.
```js
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
 ```
 
 이전 leetcode 문제처럼 배열이 반환하는줄 🙂
 다시 풀어야한다. 
 
 {TreeNode}로 반환하는게 맞는거 같다. 왜냐면 마지막에 null null이 인자로 들어오는걸 어찌 처리하지? 하고 고민이 많이되었는데..ㅠ 
 `{TreeNode}` 로 반환된다면 고민할 필요없음.. 
