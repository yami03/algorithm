// Code wars: https://www.codewars.com/kata/the-sortreloaded-method/train/javascript

/*

Array.prototype.sort() is a pretty handy feature of the JS core, but when it comes to order an array of numbers, sometimes it can pollute our code.

In this Kata you have to extend the Array object and add the sortReloaded(dir) method to it in order to make this task easier and cleaner.

It should receive a dir parameter which has with two possible values 'asc' or 'desc', and return a new array ordered ascendingly or descendingly respectively. If no dir parameter is set it should assume 'asc' by default. If it has an invalid value, return false.

For the effects of this Kata, all the arrays will contain only Integer numbers so you don't have to care about validating them.

*/

// Always code your solution having best practices in mind
Array.prototype.sortReloaded = function (type) {
  if(!(type === 'asc' || type === 'desc' || !type)) return false;
  let arr = [...this];

  for(let i = 0; i < arr.length; i++) {
    let isSwap = false;

    for(let j = 1; j < arr.length; j++) {

      if(arr[j - 1] > arr[j]) {
        let storedJ = arr[j];

        arr[j] = arr[j - 1];
        arr[j - 1] = storedJ;
        isSwap = true;
      }
    }
    if(!isSwap) return type === 'desc' ? arr.reverse() : arr;
  }

}
22

assertEquals(typeof Array.prototype.sortReloaded , 'function');
assertDeepEquals([3,1,5,3,6,1,2].sortReloaded('asc'), [1,1,2,3,3,5,6]);
assertDeepEquals([2,3,4,3,2,9,1].sortReloaded('desc'), [9,4,3,3,2,2,1]);
assertSimilar([2,3].sortReloaded('foo') , false);
assertDeepEquals([4,7,2].sortReloaded() , [2,4,7]);

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}