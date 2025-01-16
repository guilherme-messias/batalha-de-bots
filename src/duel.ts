import getRandomString from "./getRandomBotName";
import simulateBotBattle from "./simulateBotBattle";

interface Bot {
  name: string;
  model: string;
  energy: number;
  attack: number;
}

window.onload = () => {
  const storedBot1 = localStorage.getItem("bot1");
  const storedBot2 = localStorage.getItem("bot2");

  if (storedBot1 && storedBot2) {
    const bot1: Bot = JSON.parse(storedBot1);
    const bot2: Bot = JSON.parse(storedBot2);

    const getRandomBotName: string = getRandomString(bot1.name, bot2.name);
    const winnerBot: Bot = simulateBotBattle(bot1, bot2, getRandomBotName);

    console.log(winnerBot);
  } else {
    console.log('Bots não encontrados no localStorage');
  }
};
