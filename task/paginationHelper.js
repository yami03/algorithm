/*
* 페이지네이션 헬퍼
*
* 여러분은 PaginationHelper 생성자 함수를 완성해서 Rhaegal의 페이지 세는 작업을 도와주어야 합니다.
* 이 PaginationHelper는 글자들이 들어있는 배열(collection)과,
* 한 페이지에 얼마나 많은 글자를 가질 수 있는지 알려주는 숫자(itemsPerPage)을 가질 수 있게 설계되었습니다.
*
* 다음의 예를 통해 이 class를 어떻게 사용할 수 있는지 알아봅시다.
*
* var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
* // PaginationHelper를 사용하기 위해 helper 객체를 생성합니다.
*
* // helper instance는 다음과 같이 사용할 수 있습니다.
* helper.pageCount(); // should == 2, 총 페이지 수를 셀 수 있습니다.
* helper.itemCount(); //should == 6, 총 글자 수를 알려줍니다.
* helper.pageItemCount(0); //should == 4, 0 page에는 4개의 글자가 있다고 알려줍니다.
* helper.pageItemCount(1); // should == 2, 1 page에는 2개의 글자가 있다고 알려줍니다. 이 예에서는 1page가 곧 마지막 페이지가 됩니다.
* helper.pageItemCount(2); // should == -1, 2 page는 없으므로 invalid한 입력입니다. 그래서 -1을 반환해줍니다.
*
* // pageIndex method는 글자의 index를 입력으로 받아 해당 글자가 속한 페이지를 알려줍니다.
* helper.pageIndex(5); //should == 1 (0 page에서부터 시작하므로)
* helper.pageIndex(2); //should == 0
* helper.pageIndex(20); //should == -1
* helper.pageIndex(-10); //should == -1
*/

// TODO: 아래의 함수 내용들을 완성해주세요.

// The constructor function
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Obsolete_Pages/Core_JavaScript_1.5_Guide/Creating_New_Objects/Using_a_Constructor_Function
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// What is prototype?
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain

// this function returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

// this function returns the number of pages
// 이 부분에서 this.itemCount() 이렇게 쓰는게 나을지 this.collection.length 쓰는게 나은지 모르겠습니다. 
// 만약 PaginationHelper.prototype.itemCount이 수정될 수도 있으니 pageCount()가 독립성을 갖도록 
// this.collection.length 이렇게 쓰는게 맞을까요 ? 
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// this function returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  const totalPage = Math.ceil(this.collection.length / this.itemsPerPage) - 1;
  const remainder = this.collection.length % this.itemsPerPage;

  if (pageIndex >= 0 && totalPage > pageIndex) {
    return this.itemsPerPage;
  } else if (totalPage === pageIndex) {
    if (remainder === 0) {
      return this.itemsPerPage;
    }
    return remainder;
  }
  return -1;
};

// this function determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex >= 0 && itemIndex < this.collection.length) {
    return Math.floor(itemIndex / this.itemsPerPage);
  }
  return -1;
};

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
assertSimilar(helper.pageCount(), 2);
assertSimilar(helper.itemCount(), 6);
assertSimilar(helper.pageItemCount(0), 4);
assertSimilar(helper.pageItemCount(1), 2);
assertSimilar(helper.pageItemCount(2), -1);
assertSimilar(helper.pageIndex(5), 1);
assertSimilar(helper.pageIndex(2), 0);
assertSimilar(helper.pageIndex(20), -1);
assertSimilar(helper.pageIndex(-10), -1);

function assertSimilar(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}