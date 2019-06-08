// Codewars Link: https://www.codewars.com/kata/550f22f4d758534c1100025a
/* Once upon a time, on a way through the old wild west, …

…a man was given directions to go from one point to another.
The directions were "NORTH", "SOUTH", "WEST", "EAST".
Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
Going to one direction and coming back the opposite direction is a needless effort
.Since this is the wild west, with dreadfull weather and not much water, 
it 's important to save yourself some energy, otherwise you might die of thirst!
How I crossed the desert the smart way.

The directions given to the man are,
for example, the following:

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].


You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay to the same place
!So the task is to give to the man a simplified version of the plan.
A better plan in this case is simply:["WEST"] */

// @param {arr} arr -- map
function dirReduc(arr) {
  const compass = ["NORTH", "SOUTH", "WEST", "EAST"];

  arr.map((dir, idx) => {
    let MatchIdx = compass.findIndex(ele => {
      return dir === ele;
    });
    
    let comIdx = MatchIdx % 2 ? MatchIdx - 1 : MatchIdx + 1;

    if (arr[idx + 1] === compass[comIdx]) {
      arr.splice(idx, 2);
      dirReduc(arr);
    };
  });

  return arr;
}

assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]);
assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"]);
assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);

function assertSimilar(ret, correctRet) {
  if (typeof correctRet === 'object') {
    const isSame = ret.every((el, index) => {
      return el === correctRet[index];
    });
    if (isSame) {
      return console.log(`success: [${ret}] as expected.`);
    }
  }

  if (ret === correctRet) {
    return console.log(`success: [${ret}] as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}

/* Codewrs Solution
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH',
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir])
      dirs.pop();
    else
      dirs.push(dir);
    return dirs;
  }, []);
}
*/