/*
  ...........YOUR MISSION...........

  Write a program that will convert a dollar amount to the
  number of coins that make up the amount. Use the common
  American coins of quarters, dimes, nickels, and pennies.

  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

// function coinCounter () {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {};

//   coinPurse.quarters = 0;

//   return coinPurse;
// }

// var coins = coinCounter()
// console.log();

// ------------------------------------------------------------------------------------------

function coinCounter(money) {
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
  };

  money = money * 100;

  coinPurse.quarters = Math.floor(money / 25);
  money = money - (coinPurse.quarters * 25);
    console.log("coinPurse.quarters", coinPurse.quarters);
  coinPurse.dimes = Math.floor(money / 10);
  money = money - (coinPurse.dimes * 10);
    console.log("coinPurse.dimes", coinPurse.dimes);
  coinPurse.nickels = Math.floor(money / 5);
  money = money - (coinPurse.nickels * 5);
    console.log("coinPurse.nickels", coinPurse.nickels);
  coinPurse.pennies = Math.floor(money / 1);
  money = money - (coinPurse.pennies * 1)
    console.log("coinPurse.pennies", coinPurse.pennies);

  return coinPurse;
}
var coins = coinCounter(.67);
console.log("coins", coins);


