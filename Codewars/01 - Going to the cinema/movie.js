/* https://www.codewars.com/kata/562f91ff6a8b77dfe900006e
*  티켓을 사는 시스템은 A와 B 두개가 있다.  
*  System A : buy a ticket (15 dollars) every time
*  System B : buy a card (500 dollars) and every time
*  buy a ticket the price of which is 0.90 times the price he paid for the previous one.
*  만약 영화관에 두번 간다면 
*  System A : 15 * 3 = 45
*  System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
*  B의 시스템이 더 이득일 때를 구하시오. ceil(price of System B) < price of System A.
*/

// @param {Number} card -- B 시스템의 카드 가격
// @param {Number} ticket -- 티켓의 가격
// @param {Number} perc -- 할인가 퍼센트 

function movie(card, ticket, perc) {
    var totalPrice = card;
    var tickets = 0;
    for (let i = 1; i > 0; i++) {
        totalPrice += Math.pow(perc, i) * ticket;
        tickets = ticket * i;
        if (Math.ceil(totalPrice) < tickets) {
            return i;
            break;
        };
    };
};

console.log(movie(500, 15, 0.9)) // 43
console.log(movie(100, 10, 0.95)) // 24


