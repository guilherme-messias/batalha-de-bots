import getRandomString from "./getRandomBotName";
import simulateBotBattle from "./simulateBotBattle";
const bot1 = {
    name: "R2-D2",
    model: "astromech",
    energy: 100,
    attack: 10,
};
const bot2 = {
    name: "C-3PO",
    model: "protocol",
    energy: 100,
    attack: 5,
};
const getRandomBotName = getRandomString(bot1.name, bot2.name);
const winnerBot = simulateBotBattle(bot1, bot2, getRandomBotName);
