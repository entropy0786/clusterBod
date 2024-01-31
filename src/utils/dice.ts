// utility function to roll dice.

function roll(min:number, max:number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const roll1D6 = () => roll(1,6);
const roll2D6 = () => { return roll1D6() + roll1D6(); };