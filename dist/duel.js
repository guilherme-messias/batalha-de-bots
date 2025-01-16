import getRandomString from "./getRandomBotName";
import simulateBotBattle from "./simulateBotBattle";
window.onload = () => {
    const storedBot1 = localStorage.getItem("bot1");
    const storedBot2 = localStorage.getItem("bot2");
    if (storedBot1 && storedBot2) {
        const bot1 = JSON.parse(storedBot1);
        const bot2 = JSON.parse(storedBot2);
        const getRandomBotName = getRandomString(bot1.name, bot2.name);
        const winnerBot = simulateBotBattle(bot1, bot2, getRandomBotName);
        console.log(winnerBot);
    }
    else {
        console.log('Bots não encontrados no localStorage');
    }
};
