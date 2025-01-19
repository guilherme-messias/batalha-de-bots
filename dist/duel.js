import getRandomString from "./getRandomBotName.js";
import simulateBotBattle from "./simulateBotBattle.js";
const divInitialDrawWinner = document.getElementById("initial-draw-winner");
const divDuelSection = document.getElementById("duel-section");
window.onload = () => {
    const storedBot1 = localStorage.getItem("bot1");
    const storedBot2 = localStorage.getItem("bot2");
    if (storedBot1 && storedBot2) {
        const bot1 = JSON.parse(storedBot1);
        const bot2 = JSON.parse(storedBot2);
        const getRandomBotName = getRandomString(bot1.name, bot2.name);
        divInitialDrawWinner.innerHTML = `The initial draw winner is: ${getRandomBotName}`;
        setTimeout(async () => {
            divDuelSection.innerHTML = `The draw is complete! Follow the battle progress live in your browser console!`;
            const winnerBot = await simulateBotBattle(bot1, bot2, getRandomBotName);
            localStorage.setItem("winnerBot", JSON.stringify(winnerBot));
            window.location.href = "../public/winner.html";
        }, 2000);
    }
    else {
        console.log("Bots not found in localStorage");
    }
};
