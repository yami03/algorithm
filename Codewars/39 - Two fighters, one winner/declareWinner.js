function declareWinner(fighter1, fighter2, firstAttacker) {

  var state = firstAttacker;

  while(fighter1.health > 0 && fighter2.health > 0) {
    if(state === fighter1.name) {
      fighter2.health = fighter2.health - fighter1.damagePerAttack;
      state = fighter2.name;
    } else {
      fighter1.health = fighter1.health - fighter2.damagePerAttack;
      state = fighter1.name;
    }
  }

  if(state !== fighter1.name) return fighter1.toString();
  return fighter2.toString();
}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}



assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald");
assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald");
assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald");
assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald");

function assertEquals(ret, correctRet) {
  if (ret === correctRet) {
    return console.log(`success: ${ret} as expected.`);
  }
  console.warn(`failed: ${correctRet}, got ${ret} instead.`);
}