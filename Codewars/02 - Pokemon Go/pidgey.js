// @param {Number} pidgey -- 구구
// @param {Number} candy -- 사탕
function pidgeyCalc(pidgeys, candy) {
    const used = 12;
    const xp = 500;

    let candys = candy - used;
    let candy_evolution;

    // 캔디 수 && 구구 수가 둘다 부족한 경우 
    if (pidgeys == 0 || candy + pidgeys <= used) {
        return 0;

        //캔디 수는 부족한데 구구쨔응팔아서 사탕을 모은다.. 
    } else if (candy < used && candy + pidgeys > used) {

        pidgeys = pidgeys - (used - candy) - 1;

        if (pidgeys < used - 1) {
            return xp;
        } else {
            return (Math.floor(pidgeys / 12) + 1) * xp;
        }
    }

    //구구와 피존수가 낭낭한 경우 
    candy_evolution = Math.floor(candys / (used - 2)) + 1;

    // 캔디수의 총 진화 갯수와 피존의 수를 비교 
    if (candy_evolution > pidgeys) {
        return pidgeys * xp;

        //구구쨔응을 팔아서 진화시킨다   
    } else {
        if (((pidgeys - candy_evolution) + candys % (used - 2)) <= used) {
            return candy_evolution * xp;
        } else {
            pidgeys = (pidgeys - candy_evolution * (used - 2)) - (used - candy) - 1;
            if (pidgeys < used) {
                return (candy_evolution + 1) * xp
            } else {
                return (Math.floor(pidgeys / 12)) * xp + candy_evolution * xp;
            }
        }
    }
}




assertEquals(pidgeyCalc(1, 12), 500, "Expected 500");
assertEquals(pidgeyCalc(13, 144), 6500, "Expected 6500");
assertEquals(pidgeyCalc(10, 63), 3000, "Expected 3000");
assertEquals(pidgeyCalc(1, 63), 500, "Expected 500");
assertEquals(pidgeyCalc(63, 1), 2500, "Expected 2500");
assertEquals(pidgeyCalc(0, 0), 0, "Expected 0");

function assertEquals(ret, correctRet, errorMsg) {
    if (ret === correctRet) {
        return console.log(`success: ${ret} as expected.`);
    }
    console.warn(`failed: ${errorMsg}, got ${ret} instead.`);
}