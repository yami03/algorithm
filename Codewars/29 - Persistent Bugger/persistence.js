function persistence(num) {
  let arr = [...num + ''];
  let count = 0;

  while (arr.length > 1) {
    const total = arr.reduce((total, current) => Number(total) * Number(current));
    arr = [...total + ''];
    count += 1;
  }

  return count;
}

assertEquals(persistence(39), 3);
assertEquals(persistence(4), 0);
assertEquals(persistence(25), 2);
assertEquals(persistence(999), 4);

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}