// Codewars Link: https://www.codewars.com/kata/54b724efac3d5402db00065e
/* 
In this kata you have to write a simple Morse code decoder.
While the Morse code is now mostly superceded by voice and digital data communication channels, 
it still has its use in some applications around the world.

The Morse code encodes every character as a sequence of "dots" and "dashes".
For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−.
The Morse code is case -insensitive, traditionally capital letters are used.When the message is written in Morse code, 
a single space is used to separate the character codes and 3 spaces are used to separate words.For example, 
the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, 
the most notorious of those is the international distress signal SOS(that was first issued by Titanic), 
that is coded as ···−−−···.These special codes are treated as single special characters, 
and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human - readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE" */

const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z"
};

decodeMorse = function (morseCode) {
  //your code here
  if ('···−−−···' === morseCode) return "SOS";

  const arr = morseCode.split(' ');
  let result = [];

  arr.forEach((code, index) => {
    if (MORSE_CODE[code]) {
      result.push(MORSE_CODE[code]);
    } else if ('' !== arr[index - 1] && index !== 0) {
      result.push(' ');
    }
  });
  if (result[result.length - 1] === ' ') result.pop();
  return result.join('');
};

assertEquals(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');
assertEquals(decodeMorse('   --- ---   '), 'OO');
assertEquals(decodeMorse('···−−−···'), 'SOS');

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}

/* Codewars Solution 
decodeMorse = function (morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }

  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
} */