import getRandomString from "./getRandomBotName";
import simulateBotBattle from "./simulateBotBattle";

interface Bot {
  name: string;
  model: string;
  energy: number;
  attack: number;
}
const getRandomBotName: string = getRandomString(bot1.name, bot2.name);

const winnerBot: Bot = simulateBotBattle(bot1, bot2, getRandomBotName);
  