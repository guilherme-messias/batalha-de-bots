const bot1 = {
  name: "R2-D2",
  model: "astromech",
  energy: 100,
  attack: 10,
};

const bot2 = {
  name: "C-3PO",
  model: "protocol",
  energy: 100,
  attack: 5,
};

function teste(b1, b2, result) {
  let bot1, bot2;
  if (b1.name === result) {
    bot1 = b1;
    bot2 = b2;
  } else {
    bot1 = b2;
    bot2 = b1;
  }

  // energia de ambos precisa ser superior a 0
  while (bot1.energy > 0 && bot2.energy > 0) {
    // bot1 ataca bot2
    bot2.energy -= bot1.attack;
    console.log(`bot1 ataca bot2: Energia Bot2: ${bot2.energy}`);
    if (bot2.energy <= 0) break;

    // bot2 ataca bot1
    bot1.energy -= bot2.attack;
    console.log(`bot2 ataca bot1: Energia Bot1: ${bot1.energy}`);
  }

  // Retorna o vencedor
  return bot1.energy > 0 ? bot1 : bot2;
}

console.log(teste(bot1, bot2, "C-3PO"));
