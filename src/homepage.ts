interface Bot {
  name: string;
  model: string;
  energy: number;
  attack: number;
}

const startBattle = document.getElementById("start-battle") as HTMLButtonElement;

startBattle.addEventListener("click", () => {
  const bot1: Bot = {
    name: (document.getElementById("bot1-name") as HTMLInputElement).value,
    model: (document.getElementById("bot1-model") as HTMLInputElement).value,
    energy: Number((document.getElementById("bot1-energy") as HTMLInputElement).value),
    attack: Number((document.getElementById("bot1-attack") as HTMLInputElement).value),
  };

  const bot2: Bot = {
    name: (document.getElementById("bot2-name") as HTMLInputElement).value,
    model: (document.getElementById("bot2-model") as HTMLInputElement).value,
    energy: Number((document.getElementById("bot2-energy") as HTMLInputElement).value),
    attack: Number((document.getElementById("bot2-attack") as HTMLInputElement).value),
  };

  localStorage.setItem("bot1", JSON.stringify(bot1));
  localStorage.setItem("bot2", JSON.stringify(bot2));

  window.location.href = "../public/duel.html";
});
