const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const billsRegistered = [];

const tips = [];
const totals = [];
let totalValue;

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return (billValue * 15) / 100;
  } else {
    return (billValue * 20) / 100;
  }
}

for (let bill = 0; bill < bills.length; bill++) {
  const tip = calcTip(bills[bill]);
  tips.push(tip);
  totals.push(bills[bill] + tip);
}

console.log(tips);
console.log(totals);

function calcAverage(arr) {
  let sum = 0;
  let average;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
    average = sum / arr.length;
  }
  return average;
}

console.log(calcAverage(totals));
