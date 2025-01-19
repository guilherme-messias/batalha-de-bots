export default async function simulateBotBattle(bot1, bot2, randomBotName) {
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    let firstAttacker, secondAttacker;
    if (bot1.name === randomBotName) {
        firstAttacker = bot1;
        secondAttacker = bot2;
    }
    else {
        firstAttacker = bot2;
        secondAttacker = bot1;
    }
    while (firstAttacker.energy > 0 && secondAttacker.energy > 0) {
        console.log(`${firstAttacker.name} attacks ${secondAttacker.name}!`);
        secondAttacker.energy -= firstAttacker.attack;
        console.log(`${secondAttacker.name} has ${secondAttacker.energy} energy left.`);
        await sleep(3000);
        if (secondAttacker.energy <= 0) {
            break;
        }
        console.log(`${secondAttacker.name} attacks ${firstAttacker.name}!`);
        firstAttacker.energy -= secondAttacker.attack;
        console.log(`${firstAttacker.name} has ${firstAttacker.energy} energy left .`);
        await sleep(3000);
    }
    return firstAttacker.energy > 0 ? firstAttacker : secondAttacker;
}
