function zero() {
  let arg = arguments.length ? arguments : 0;
  return result('0', arg);
}

function one() {
  let arg = arguments.length ? arguments : 0;
  return result('1', arg);
}

function two() {
  let arg = arguments.length ? arguments : 0;
  return result('2', arg);
}

function three() {
  let arg = arguments.length ? arguments : 0;
  return result('3', arg);
}

function four() {
  let arg = arguments.length ? arguments : 0;
  return result('4', arg);
}

function five() {
  let arg = arguments.length ? arguments : 0;
  return result('5', arg);
}

function six() {
  let arg = arguments.length ? arguments : 0;
  return result('6', arg);
}

function seven() {
  let arg = arguments.length ? arguments : 0;
  return result('7', arg);
}

function eight() {
  let arg = arguments.length ? arguments : 0;
  return result('8', arg);
}

function nine() {
  let arg = arguments.length ? arguments : 0;
  return result('9', arg);
}

function plus() {
  return `+ ${arguments[0]}`;
}

function minus() {
  return `- ${arguments[0]}`;
}

function times() {
  return `* ${arguments[0]}`;
}

function dividedBy() {
  return `/ ${arguments[0]}`;
}

function result(num, arg) {
  if (arg) {
    return parseInt(eval(`${num} ${arg[0]}`));
  }
  return num;
}

assertEquals(seven(times(five())), 35);
assertEquals(four(plus(nine())), 13);
assertEquals(eight(minus(three())), 5);
assertEquals(six(dividedBy(two())), 3);

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}