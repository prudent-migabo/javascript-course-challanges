// Data1
const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.96;

const markBMI = weightMark / heightMark ** 2; // 27.30
const johnBMI = weightJohn / heightJohn ** 2; // 23.94

console.log(markBMI, johnBMI);

const markHeigherBMI = markBMI > johnBMI;
console.log(markHeigherBMI);


// Data 2
const newMassMark = 95;
const newHeightMark = 1.88;
const newMasstJohn = 85;
const newHeightJohn = 1.76;

const newMarkBMI = newMassMark / newHeightMark ** 2; // 26.87
const newJohnBMI = newMasstJohn / newHeightJohn ** 2; // 27.44

console.log(newMarkBMI, newJohnBMI);

const newHeigherBMI = newMarkBMI > newJohnBMI;
console.log(newHeigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is highter than John's BMI ${johnBMI}`);
} else {
    console.log(`John's BMI ${johnBMI} is highter than Mark's BMI ${markBMI}`);
}
