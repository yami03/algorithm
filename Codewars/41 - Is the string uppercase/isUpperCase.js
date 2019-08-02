// Codewars Link: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
/*
Is the string uppercase?
Task
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
Corner Cases
For simplicity, you will not be tested on the ability to handle corner cases
(e.g. "%*&#()%&^#" or similar strings containing alphabetical characters at all)
- an ALL CAPS (uppercase) string will simply be defined as one containing no lowercase letters.
Therefore, according to this definition, strings with no alphabetical characters (like the one above) should return True.
*/

String.prototype.isUpperCase = function() {
  let arr = this.split(' ');
  let result = arr.every(el => el === el.toUpperCase());
  return result;
}


assertEquals('c'.isUpperCase(), false);
assertEquals('C'.isUpperCase(), true);
assertEquals('hello I AM DONALD'.isUpperCase(), false);
assertEquals('HELLO I AM DONALD'.isUpperCase(), true);
assertEquals('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false);
assertEquals('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true);

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}