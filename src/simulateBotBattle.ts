interface Bot {
  name: string;
  model: string;
  energy: number;
  attack: number;
}

export default function simulateBotBattle(bot1: Bot, bot2: Bot, randomBotName: string): Bot {
  let firstAttacker: Bot, secondAttacker: Bot;
  if (bot1.name === randomBotName) {
    firstAttacker = bot1;
    secondAttacker = bot2;
  } else {
    firstAttacker = bot2;
    secondAttacker = bot1;
  }
}