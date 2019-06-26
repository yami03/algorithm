// Codewars Link: https://www.codewars.com/kata/5571f712ddf00b54420000ee

// Welcome young Jedi!In this Kata you must create a
// function that takes an amount of US currency in cents, 
// and returns a dictionary / hash which shows the least amount of coins used to make up that amount.
// The only coin denominations considered in this exercise are: Pennies(1¢), Nickels(5¢), Dimes(10¢) and Quarters(25¢).
// Therefor the dictionary returned should contain exactly 4 key / value pairs.

// Notes:

// If the function is passed either 0 or a negative number, the function should
// return the dictionary with all values equal to 0.
// If a float is passed into the function, its value should be be rounded down, 
// and the resulting dictionary should never contain fractions of a coin.

// Examples

// loose_change(56) == > {
//   'Nickels': 1,
//   'Pennies': 1,
//   'Dimes': 0,
//   'Quarters': 2
// }
// loose_change(-435) == > {
//   'Nickels': 0,
//   'Pennies': 0,
//   'Dimes': 0,
//   'Quarters': 0
// }
// loose_change(4.935) == > {
//   'Nickels': 0,
//   'Pennies': 4,
//   'Dimes': 0,
//   'Quarters': 0
// }

function looseChange(cents) {
  const centArr = [1, 5, 10, 25];
  let results = {
    Nickels: 0,
    Pennies: 0,
    Dimes: 0,
    Quarters: 0
  } 
  
  let resultsKeys = ['Pennies', 'Nickels', 'Dimes', 'Quarters'];
  let centResult = parseInt(cents);

  if (centResult <= 0) return results;

  for (let i = centArr.length - 1; i >= 0; i--) {
    
    cal(centResult, centArr[i], resultsKeys[i]);
  }

  function cal(cent, centArr, key) {
    if (cent >= centArr) {
      results[key] = parseInt(cent / centArr);
      return centResult = cent % centArr;
    }
  }
 
  return results;
}

console.log(seemilar(looseChange(56), {
  'Nickels': 1,
  'Pennies': 1,
  'Dimes': 0,
  'Quarters': 2
}));
console.log(seemilar(looseChange(100), {
  'Nickels': 0,
  'Pennies': 0,
  'Dimes': 0,
  'Quarters': 4
}));
console.log(seemilar(looseChange(0), {
  'Nickels': 0,
  'Pennies': 0,
  'Dimes': 0,
  'Quarters': 0
}));
console.log(seemilar(looseChange(-3), {
  'Nickels': 0,
  'Pennies': 0,
  'Dimes': 0,
  'Quarters': 0
}));

function seemilar(obj1, obj2) {
  for (var att in obj1) {
    if (obj1[att] != obj2[att]) return false
  };
  return true
};

/* Codewars Solution
function looseChange(cents) {
  var a = {
    Nickels: 0,
    Pennies: 0,
    Dimes: 0,
    Quarters: 0
  };
  if (cents <= 0) return a;
  a.Quarters = Math.floor(cents / 25);
  a.Dimes = Math.floor(cents % 25 / 10);
  a.Nickels = Math.floor(cents % 25 % 10 / 5);
  a.Pennies = Math.floor(cents % 25 % 10 % 5);
  return a;
} */