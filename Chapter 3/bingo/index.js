const rows = document.querySelectorAll('.row');
const nums = document.querySelectorAll('.num');
const cardTitle = document.querySelector('.title');
// const totalPlayers = prompt("How many players are you?");
// const playerName = prompt("What's your name?");
const generateRandomNumber = () => Math.floor(Math.random() * 99) + 1;

const generatePlayerCard = () => {
  for(let row of rows) {
    for (let num of nums) {
      num.innerHTML = generateRandomNumber().toString();
    }
  }

  return playerBoard = Array.from(nums).map(num => num.innerHTML);
}

const player = {
  getPlayerName: () => {
    cardTitle.innerHTML = playerName;
  },
  getNumbers: generatePlayerCard(),
};

console.log(player);