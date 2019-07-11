// Codewars Link: https://www.codewars.com/kata/52774a314c2333f0a7000688

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints
// 0 <= input.length <= 100

function validParentheses(parens){
  const left = '(';
  
  let leftArr = [];
  for(let i = 0; i < parens.length; i++) {
    if(parens[i] === left) {
      leftArr.push(leftArr);
    } else {
      if(!leftArr.length) return false;
      leftArr.pop();
    }
  }
  if(leftArr.length > 0) return false;
  return true;
}

assertEquals(validParentheses( "()" ), true);
assertEquals(validParentheses( "())" ), false);

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}