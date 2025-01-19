window.onload = () => {
    const winnerBot = localStorage.getItem("winnerBot");
    if (winnerBot) {
        const bot = JSON.parse(winnerBot);
        const winnerBotName = document.getElementById("winner-name");
        winnerBotName.innerHTML = `The winner is: ${bot.name} with ${bot.energy} energy points!`;
    }
    else {
        console.log("Bots not found in localStorage");
    }
};
