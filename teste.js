function name(b1, b2, result) {
  let bot1, bot2;
  if (b1.name === result) {
    bot1 = b1;
    bot2 = b2;
  } else {
    bot1 = b2;
    bot2 = b1;
  }

  // energia de ambos precisa ser superior a 0
  while (bot1.energy >= 0 && bot2.energy >= 0) {
    // bot1 ataca bot2
    bot2.energy -= bot1.attack;
    if (bot2.energy <= 0) break;

    // bot2 ataca bot1
    bot1.energy -= bot2.attack;
  }

  // Retorna o vencedor
  return bot1.energy > 0 ? bot1 : bot2;
}