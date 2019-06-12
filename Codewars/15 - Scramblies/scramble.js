// codewars Link: https://www.codewars.com/kata/55c04b4cc56a697bb0000048
/* Complete the
function scramble(str1, str2) that returns true
if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower
case letters will be used(a - z).No punctuation or digits will be included.
Performance needs to be considered

Input strings s1 and s2 are null terminated.

Examples

scramble('rkqodlw', 'world') == > True
scramble('cedewaraaossoqqyt', 'codewars') == > True
scramble('katas', 'steak') == > False 
*/

function scramble(str1, str2) {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');

  for (let el = 0; el < str2Arr.length; el++) {

    for (let idx = 0; idx < str1Arr.length; idx++) {

      if (str1Arr[idx] === str2Arr[el]) {
        str1Arr.splice(idx, 1);
        break;
      }

      if (idx === str1Arr.length - 1) return false;


    }
  }
  return true;

}


