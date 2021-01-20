//Muestra la cantidad de monedas
const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: $ ${saveCoins}`);
};

moneyBox(5);
moneyBox(10);

// haciendo el uso del closure
const moneyBox = () => {
  let saveCoins = 0;
  //closure
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $ ${saveCoins}`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
