import getRandomString from "./getRandomBotName";
import simulateBotBattle from "./simulateBotBattle";
const getRandomBotName = getRandomString(bot1.name, bot2.name);
const winnerBot = simulateBotBattle(bot1, bot2, getRandomBotName);
