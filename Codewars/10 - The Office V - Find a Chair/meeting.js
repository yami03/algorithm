/* codeWars Link: https://www.codewars.com/kata/the-office-v-find-a-chair/train/javascript
* So you 've found a meeting room - phew! You arrive there ready to present, 
* and find that someone has taken one or more of the chairs!! You need to find some quick.... 
* check all the other meeting rooms to see if all of the chairs are in use.
*
* Your meeting room can take up to 8 chairs.
* need will tell you how many have been taken.
* You need to find that many.

* Find the spare chairs from the array of meeting rooms.
* Each meeting room array will have the number of occupants as a string.Each occupant is represented by 'X'.
* The room array will also have an integer telling you how many chairs there are in the room.

* You should return an array of integers that shows how many chairs you take from each room in order, 
* up until you have the required amount.
*
* example: [
*   ['XXX', 3],
*   ['XXXXX', 6],
*   ['XXXXXX', 9],
*   ['XXX', 2]
* ] when you need 4 chairs:
*
* result-- > [0, 1, 3](no chairs free in room 0, take 1 from room 1, take 3 from room 2.
* No need to consider room 4 as you have your 4 chairs already.

* If you need no chairs,
* return 'Game On'.If there aren't enough spare chairs available, return 'Not enough!'
*/

function meeting (x, need) {
  if (need === 0) return 'Game On';
  let result = [];
  let resultTotal = 0;

  for (const k in x) {
      x[k][0].length >= x[k][1] ? result.push(0) : result.push(x[k][1] - x[k][0].length);
      if (x[k][0].length < x[k][1]) {
      resultTotal = result.reduce((prev, curr) => prev + curr);

      if (need < resultTotal) {
        result[result.length - 1] = result[result.length - 1] - (resultTotal - need);
        return result;
      } else if (need === resultTotal) {
        return result;
      }
    }
  }
  return 'Not enough!';
}

assertSimilar(meeting([
  ['XXX', 3],
  ['XXXXX', 6],
  ['XXXXXX', 9]
], 4), [0, 1, 3]);
assertSimilar(meeting([
  ['XXX', 1],
  ['XXXXXX', 6],
  ['X', 2],
  ['XXXXXX', 8],
  ['X', 3],
  ['XXX', 1]
], 5), [0, 0, 1, 2, 2]);
assertSimilar(meeting([
  ['XX', 2],
  ['XXXX', 6],
  ['XXXXX', 4]
], 0), 'Game On');

function assertSimilar(ret, correctRet) {
  if (typeof correctRet === 'object') {
    const isSame = ret.every((el, index) => {
      return el === correctRet[index];
    });
    if (isSame) {
      return console.log(`success: ${ret} as expected.`);
    }
  }
  
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}

// CodeWrars Best Solution
/*
function meeting(rooms, need) {
  if (need <= 0) {
    return 'Game On';
  }
  const taken = [];
  for (const [{ length: chairs }, people] of rooms) {
    const take = Math.min(Math.max(people - chairs, 0), need);
    taken.push(take)
    need -= take;
    if (need <= 0) {
      return taken;
    }
  }
  return 'Not enough!';
}
*/