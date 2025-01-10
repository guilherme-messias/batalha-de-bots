interface Bot {
  name: string;
  model: string;
  energy: number;
  attack: number;
}

const bot1: Bot = {
  name: "R2-D2",
  model: "astromech",
  energy: 100,
  attack: 10,
};

const bot2: Bot = {
  name: "C-3PO",
  model: "protocol",
  energy: 100,
  attack: 5,
};
