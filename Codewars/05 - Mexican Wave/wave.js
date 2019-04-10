/* https://www.codewars.com/kata/mexican-wave/train/javascript
*  wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(word){
    const words = word;
    let result = []

    for (let i = 0; i < words.length; i++) {
        result += words;
    }

    return result;
}

console.log(wave("hi"));