import getRandomString from "./getRandomBotName";
import simulateBotBattle from "./simulateBotBattle";

interface Bot {
  name: string;
  model: string;
  energy: number;
  attack: number;
}

const divInitialDrawWinner = document.getElementById("initial-draw-winner") as HTMLDivElement;
const divDuelSection = document.getElementById("duel-section") as HTMLDivElement;

window.onload = () => {
  const storedBot1 = localStorage.getItem("bot1");
  const storedBot2 = localStorage.getItem("bot2");

  if (storedBot1 && storedBot2) {
    const bot1: Bot = JSON.parse(storedBot1);
    const bot2: Bot = JSON.parse(storedBot2);

    const getRandomBotName: string = getRandomString(bot1.name, bot2.name);
    divInitialDrawWinner.innerHTML = `The initial draw winner is: ${getRandomBotName}`;

    setTimeout(async () => {
      divDuelSection.innerHTML = `The draw is complete! Follow the battle progress live in your browser console!`;
      const winnerBot: Bot = await simulateBotBattle(bot1, bot2, getRandomBotName);

      localStorage.setItem("winnerBot", JSON.stringify(winnerBot));
      window.location.href = "../public/winner.html";
    }, 2000);
  } else {
    console.log("Bots not found in localStorage");
  }
};
