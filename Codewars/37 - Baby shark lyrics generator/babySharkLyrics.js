// Codewars Link: https://www.codewars.com/kata/5d076515e102162ac0dc514e
/*
Create a function, as short as possible, that returns this lyrics.
Your code should be less than 300 characters.

Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark, doo doo doo doo doo doo
Baby shark!
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark, doo doo doo doo doo doo
Mommy shark!
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark, doo doo doo doo doo doo
Daddy shark!
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark, doo doo doo doo doo doo
Grandma shark!
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark, doo doo doo doo doo doo
Grandpa shark!
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt, doo doo doo doo doo doo
Let's go hunt!
Run away,…
*/

function babySharkLyrics(){ var n=["Baby","Mommy","Daddy","Grandma","Grandpa","Let's go hunt"]; var d=' doo'.repeat(6); var song = ''; for(var i=0;i<6; i++){ for(var j=0;j<4; j++){ var s = n[i]; if(i<5)s+=' shark'; if(j<3){song += `${s},${d}\n`;}else{ song+=`${s}!\n`}}} return song+='Run away,…'; }

assertEquals(babySharkLyrics(),
'Baby shark, doo doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark, doo doo doo doo doo doo\nBaby shark!\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark, doo doo doo doo doo doo\nMommy shark!\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark, doo doo doo doo doo doo\nDaddy shark!\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark, doo doo doo doo doo doo\nGrandma shark!\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark, doo doo doo doo doo doo\nGrandpa shark!\nLet\'s go hunt, doo doo doo doo doo doo\nLet\'s go hunt, doo doo doo doo doo doo\nLet\'s go hunt, doo doo doo doo doo doo\nLet\'s go hunt!\nRun away,…');

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}