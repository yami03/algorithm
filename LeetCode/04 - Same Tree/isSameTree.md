# Same Tree

[link](https://leetcode.com/problems/same-tree/)

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

## Example 1

```
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
```

## Example 2

```
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
```

## Example 3

```
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
```

## Solution

```ts
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
  // 둘다 null인 경우 재귀를 태우지 않는다.
  if (p === null && q === null) return true;
    
  // false의 경우 1. p나 q가 null인데 하나만 null인 경우
  if ((p === null && q !== null) || (p !== null && q === null)) return false;
    
  // false의 경우 2. p와 q의 value가 null인 경우
  if (p.val !== q.val) return false;
    
  // 재귀를 돌린 경우 return 값이 false인 경우
  if (!isSameTree(p.left, q.left)) return false;
  if (!isSameTree(p.right, q.right)) return false;
    
  // 모든 경우의 수를 다 체크했을 경우 false
  return true;
};
```

저번 4번 재귀문제가 많이 도움이 되어 이번에 재귀로 풀었음.
저번에 했던 솔루션에서 `if (!isSameTree(p.left, q.left)) return false;` 이런식으로 재귀를 돌려 return에 따라 false값을 계속 이어갔는데..

57 / 57 test cases passed.

Status: Accepted

Runtime: 156 ms

Memory Usage: 33.1 MB

Submitted: 0 minutes ago

결과가 참혹하다.
평균 Runtime은 50 ~ 55ms 였다. 끝까지 전체가 callstack으로 쌓이는게 문제인가? 아님 조건문 너무 많은 탓인가.. 

## User Solution

```ts
var isSameTree = function(p, q) {
    
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right);
};
```
논리 연산자를 이용하여 if문 사용하지 아니하였다. Runtime에서도 매우 훌륭

```ts
return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
```

이게 어떻게 가능할까.. true값이 쭈욱~~ 이어지고 && 연산자 덕에.. 중간에 false가 있다면 쭉 false로 이어진다.
