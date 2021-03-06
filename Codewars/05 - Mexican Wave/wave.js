/* https://www.codewars.com/kata/mexican-wave/train/javascript
*  wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(word){
    const words = word;
    let result = []
    let upperCase = '';
    let arrIdx = 0;

    for (let i = 0; i < words.length; i++) {
        if (words.charAt(i) == ' ') {
            continue;
        }
        upperCase = words.charAt(i).toUpperCase();
        if (i === 0) {
            result[0] = `${upperCase}${words.slice(1)}`;
        } else if (i === words.length-1) {
            result[arrIdx] = `${words.slice(0,-1)}${upperCase}`;
        
        } else if (i !== 0 && i !== words.length - 1){
            result[arrIdx] = `${words.slice(0, i)}${upperCase}${words.slice(i + 1)}`;
        }
        arrIdx += 1;
    }

    return result;
}

result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
assertDeepEquals(wave("hello"), result);

result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
assertDeepEquals(wave("codewars"), result);

result = [];
assertDeepEquals(wave(""), result);

result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
assertDeepEquals(wave("two words"), result);

result = [" Gap ", " gAp ", " gaP "];
assertDeepEquals(wave(" gap "), result);

function assertDeepEquals(ret, correctRet) {
    for (let index = 0; index < correctRet.length; index++) {
        if (ret[index] !== correctRet[index]) {
            return console.log("you return", ret, ", Should return", correctRet);
        } else if (index == correctRet.length-1){
            return console.log("Value deep equals", correctRet);
        }
    }
}

/* Best Solution 

var wave = w => [...w].map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1)).filter(a => a != w)

*/