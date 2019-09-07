function solution(s) {
  let minLength = s.length;

  for(let i = 1; i <= s.length/2; i++) {
    let NumberDisplayCount = 0;
    let totalSameCount = 0;
    let sameCountBeforeString = 0;

    let array = s.match(new RegExp(`.{1,${i}}`, 'g'));

    for(let j = 1; j < array.length; j++) {
      if(array[j -1] === array[j]) {
        totalSameCount++
        sameCountBeforeString++;

      } else if(sameCountBeforeString) {
        NumberDisplayCount++;
        sameCountBeforeString = 0;
      }
    }

    if(sameCountBeforeString) NumberDisplayCount++;

    let loopTotalLength = s.length - totalSameCount * i + NumberDisplayCount;

    minLength = Math.min(minLength, loopTotalLength);

    NumberDisplayCount = 0;
    totalSameCount = 0;
    sameCountBeforeString = 0;
  }

  return minLength;
}

console.log(solution("ababcdcdababcdcd")); // 9
console.log(solution("abcabcdede")); // 8
console.log(solution("abcabcabcabcdededededede")); //14
console.log(solution("xababcdcdababcdcd")); //17