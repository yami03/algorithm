function songDecoder(song) {
  let result = [];

  for(let i = 0; i < song.length; i ++) {
    // "WUB가 들어 있는지"
    if (song[i] ==="W" && song[i + 1] === "U" && song[i + 2] === "B") {
      if (result[result.length - 1] !== ' ') result.push(' ');
      i = i + 2;
    } else {
      result.push(song[i]);
    }
  }

  if (result[result.length - 1] === ' ') result.pop();
  if (result[0] === ' ') result.shift();
  return result.join('');
}

assertEquals(songDecoder("AWUBBWUBC"), 'A B C');
assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), 'A B C');
assertEquals(songDecoder("WUBAWUBBWUBCWUB"), 'A B C');

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}
