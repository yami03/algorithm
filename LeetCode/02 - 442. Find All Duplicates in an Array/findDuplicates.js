// https://leetcode.com/problems/find-all-duplicates-in-an-array/

// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements that appear twice in this array.

// Could you do it without extra space and in O(n) runtime?

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [2,3]

/*
 * @param {number[]} nums
 * @return {number[]}
 */

var findDuplicates = function(nums) {
  var result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums.lastIndexOf(nums[i])) {
      result.push(nums[i]);
    }
  }

  return result;
};

// 실제 조건대로 풀지 못하였지만
// 다른사람들의 풀이를 봤을 때 sort를 이용하여 풀었다면 O(n)과 extra space 없이도 가능 한 문제 였다.
