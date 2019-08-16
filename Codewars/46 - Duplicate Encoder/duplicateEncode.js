// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
/*
The goal of this exercise is to convert a string to a new string
where each character in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

Assertion messages may be unclear about what they display in some languages.
If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
  var result = '';
  var lowerWord = word.toLowerCase();
  for(var i = 0; i < lowerWord.length; i++) {
    if(lowerWord.indexOf(lowerWord[i]) !== lowerWord.lastIndexOf(lowerWord[i])) { // 중복 o
      result +=')'
    } else {
      result +='('
    }
  }
  return result;
}