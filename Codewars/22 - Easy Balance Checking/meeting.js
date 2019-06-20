//Codewars Link: https://www.codewars.com/kata/59df2f8f08c6cec835000012

//John has invited some friends.His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name.
// Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

//   "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
  let stringArr = s.split(';');
  let newArr = stringArr.map(name => {
    let idx = name.indexOf(':');
    return `${name.slice(idx + 1).toUpperCase()}, ${name.slice(0, idx).toUpperCase()}`;
  });

  let sortArr = Array(newArr.length).fill('');

  for (let i = 0; i < newArr.length; i++) {
    let count = 0;
    for (let j = 0; j < newArr.length; j++) {
      if(i === j) continue;
      let start1 = newArr[i].indexOf(',') + 2;
      let start2 = newArr[j].indexOf(',') + 2;
      let lastName1 = newArr[i].slice(0, start1 - 1);
      let lastName2 = newArr[j].slice(0, start2 - 1);

      if (lastName1 > lastName2) {
        count++;
      } else if (lastName1 === lastName2) {
        let firstName1 = newArr[i].slice(start1);
        let firstName2 = newArr[j].slice(start2);
        
        if (firstName1 > firstName2) {
          count++;newArr[j].slice(start2);
        } else if (firstName1 === firstName2 && i > j) {
          count++;
        }
      } 
    }
    sortArr.splice(count, 1, newArr[i]);
  }
  return sortArr.map(name => `(${name})`).join('');
}

console.log(meeting('Alex:Arno;Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern'));