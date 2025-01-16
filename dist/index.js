const startBattle = document.getElementById("start-battle");
startBattle.addEventListener("click", () => {
    const bot1 = {
        name: document.getElementById("bot1-name").value,
        model: document.getElementById("bot1-model").value,
        energy: Number(document.getElementById("bot1-energy").value),
        attack: Number(document.getElementById("bot1-attack").value),
    };
    const bot2 = {
        name: document.getElementById("bot2-name").value,
        model: document.getElementById("bot2-model").value,
        energy: Number(document.getElementById("bot2-energy").value),
        attack: Number(document.getElementById("bot2-attack").value),
    };
});
