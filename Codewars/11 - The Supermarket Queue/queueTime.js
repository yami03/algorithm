// CodeWars Link: https://www.codewars.com/kata/the-supermarket-queue/train/javascript
/* 
There is a queue for the self - checkout tills at the supermarket.
Your task is write a function to calculate the total time required for all the customers to check out!

customers: an array of positive integers representing the queue.Each integer represents a customer, 
and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.

The function should return an integer, the total time required.

queueTime([5, 3, 4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10, 2, 3, 3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2, 3, 10], 2)
// should return 12

There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue(i.e.the first element in the array / list) proceeds to a till as soon as it becomes free.
 */

function queueTime(customers, n) {
  let maxNumber = 0;
  let lowNumber = 0;
  let lowNumberIndex = 0;
  let selfCheckout = [];

  // 손님이 0일 때
  if (!customers.length) return 0;
  // 계산대가 1개 일 때
  if (n === 1) return customers.reduce( (prev, curr) => prev + curr );
  
  // 손님보다 계산대가 더 많을 때
  if (customers.length === n || customers < n) {
    findMaxNumber(customers);
    return maxNumber;
  }

  // 계산대보다 손님이 더 많을 때 
  customers.forEach((peple, index) => {
    // 빈 계산대가 없도록 한다.
    if (index < n) {
      selfCheckout.push(peple);
      console.log(selfCheckout);
    } else {
      //최소 시간을 가진 자리 찾기
      selfCheckout.forEach((selfCheckOut, num) => {
        if (!lowNumber || lowNumber > selfCheckOut) {
          lowNumber = selfCheckOut;
          lowNumberIndex = num;
        }
      });
      selfCheckout[lowNumberIndex] = selfCheckout[lowNumberIndex] + peple;
      lowNumber = 0;
      lowNumberIndex = 0;
    }
  });

  findMaxNumber(selfCheckout);

  function findMaxNumber (arr) {
    for (const val of arr) {
      if (val > maxNumber) maxNumber = val;
    }
  }
  return maxNumber;
}

assertEquals(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
assertEquals(queueTime([], 1), 0);
assertEquals(queueTime([1, 2, 3, 4], 1), 10);
assertEquals(queueTime([1, 2, 3, 4, 5], 100), 5);

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}

/* codeWars Solution 
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
*/