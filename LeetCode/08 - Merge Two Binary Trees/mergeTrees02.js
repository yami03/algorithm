var t1 = {
  val: 1,
  left:
  {
    val: 3,
    left: { val: 5, left: null, right: null },
    right: null
  },
  right: { val: 2, left: null, right: null }
}

var t2 = {
  val: 2,
  left:
  {
    val: 1,
    left: null,
    right: { val: 4, left: null, right: null }
  },
  right:
  {
    val: 3,
    left: null,
    right: { val: 7, left: null, right: null }
  }
}

/* 방법 1? - 두개를 동시에 비교한다.
* 방법 2? - t1을 비교하면서 t2에 접근하여 합산한다.  TypeError: Cannot read property를 어떻게 해결할지..
* 방법3? - 이전에 했던 []배열값을 return 한걸 다시 객체로 만든다.. ㅠ
*/
var mergeTrees = function (t1, t2) {
  let queue = [val];
  let node = val;

  while (node.length) {
    let count = queue.length;
    let newQueue = [];
    while (count) {
      
    }
  }
  
}

console.log(mergeTrees(t1, t2))
