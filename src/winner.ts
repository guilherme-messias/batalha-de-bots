interface Bot {
  name: string;
  model: string;
  energy: number;
  attack: number;
}

window.onload = () => {
  const winnerBot = localStorage.getItem("winnerBot");

  if (winnerBot) {
    const bot: Bot = JSON.parse(winnerBot);
    const winnerBotName = document.getElementById("winner-name") as HTMLHeadingElement;
    winnerBotName.innerHTML = `The winner is: ${bot.name} with ${bot.energy} energy points!`;
  } else {
    console.log("Bots not found in localStorage");
  }
};
