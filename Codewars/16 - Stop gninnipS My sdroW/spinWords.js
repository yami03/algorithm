// Codewars Link: https://www.codewars.com/kata/5264d2b162488dc400000001

/*
Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter words reversed(Just like the name of this Kata).
Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.

Examples:

spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"
spinWords("This is a test") => returns "This is a test"
spinWords("This is another test") => returns "This is rehtona test" 
*/


const spinWords = words => {
  return words.split(' ').map(word => {
    if(word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
};

assertEquals(spinWords("Welcome"), "emocleW");
assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
assertEquals(spinWords("This is a test"), "This is a test");
assertEquals(spinWords("This is another test"), "This is rehtona test");
assertEquals(spinWords("You are almost to the last test"), "You are tsomla to the last test");
assertEquals(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
assertEquals(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}