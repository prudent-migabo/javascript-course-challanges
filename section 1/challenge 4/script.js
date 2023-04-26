const billValue = 430;
const tip = 50 <= billValue <= 300 ? (billValue * 15) / 100 : (billValue * 20) / 100;
const finalValue = billValue + tip;

console.log(tip, finalValue);


