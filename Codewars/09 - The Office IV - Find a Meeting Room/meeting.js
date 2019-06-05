// CodeWars Link: https://www.codewars.com/kata/57f604a21bd4fe771b00009c

/*
* Your job at E - Corp is both boring and difficult.
* It isn 't made any easier by the fact that everyone constantly wants to have a meeting with you, 
* and that the meeting rooms are always taken!
*
* In this kata, you will be given an array.Each value represents a meeting room.Your job ? Find the first empty one and
* return its index(N.B.There may be more than one empty room in some test cases).
*
* 'X'-- > busy 'O'-- > empty
* 
* If all rooms are busy, return 'None available!'.
*/

function meeting(x) {
  var idx = x.findIndex(a => a === 'O');
  return idx >= 0 ? idx : 'None available!';
}

assertEquals(meeting(['X', 'O', 'X']), 1);
assertEquals(meeting(['O', 'X', 'X', 'X', 'X']), 0);
assertEquals(meeting(['X', 'X', 'X', 'X', 'X']), 'None available!');

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}

// codeWrars Best Solution
/*
function meeting(x) {
  var idx = x.indexOf("O");
  return idx === -1 ? "None available!" : idx
}
*/