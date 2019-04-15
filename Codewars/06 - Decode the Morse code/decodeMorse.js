import { MORSE_CODE } from "./lib.js";
/* https://www.codewars.com/kata/decode-the-morse-code/train/javascript
*  모스부호 https://en.wikipedia.org/wiki/Morse_code
*  A는 ·−로, Q는 −−·−로 1는 ·−−−−로 해독할 수 있습니다.
*  1개의 공백은 문자코드를 분리하는데 사용되고 3개의 공백은 단어를 분리하는데 사용됩니다.
*  HEY JUDE 는 ···· · −·−−   ·−−− ··− −·· · 
*  SOS는 특별 문자로 취급되어 ···−−−···로 표현됩니다.
*  모스코드는 사전 로드되어 있습니다
*  Coffeescript / C ++ / Go / JavaScript / PHP / Python / Ruby / TypeScript : MORSE_CODE['.--']
*/


/**  HEY JUDE 는 ···· · −·−−   ·−−− ··− −·· ·  */
decodeMorse = function (morseCode) {
    //your code here
    console.log(MORSE_CODE['....'] + "" + MORSE_CODE['.']);
}

console.log(MORSE_CODE["...."]);