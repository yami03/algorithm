// Codewars Link: https://www.codewars.com/kata/55c6126177c9441a570000cc

// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

function orderWeight(strng) {
  let arr = strng.split(' ');
  let result = [];
  
  let sum = arr.map(el => {
    return [...el].reduce((total, current) => Number(total) + Number(current));
  });

  for(let i = 0; i < arr.length; i++) {
    let count = 0;
    for(let j = 0; j < arr.length; j++) {
      if(i !== j) {
        if(sum[i] === sum[j]) {
          if(arr[i] > arr[j]) {
            count += 1;
          }
        } else if(sum[i] > sum[j]) {
          count += 1;
        }
      };
    }
    result[count] = arr[i];
    count = 0;
  }

  return result.join(' ');
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));