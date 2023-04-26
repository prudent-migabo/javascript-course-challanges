// Data 1
const scrore1Dolphins = 96;
const scrore2Dolphins = 108;
const scrore3Dolphins = 89;
const scrore1Koalas = 88;
const scrore2Koalas = 91;
const scrore3Koalas = 110;

const avarageScoreDolphins = (scrore1Dolphins + scrore2Dolphins + scrore3Dolphins) / 3;
// console.log(avarageScoreDolphins);

const avarageScroreKoalas = (scrore1Koalas + scrore2Koalas + scrore3Koalas) / 3;
// console.log(avarageScroreKoalas);

if (avarageScoreDolphins > avarageScroreKoalas) {
    console.log('Dolphin is the winner');
} else if (avarageScoreDolphins === avarageScroreKoalas) {
    console.log('Equal score There is not winner for this competition');
} else {
    console.log('Koalas is the winner');
}

// Bonus 1
const newScrore1Dolphins = 97;
const newScrore2Dolphins = 112;
const newScrore3Dolphins = 101;
const newScrore1Koalas = 109;
const newScrore2Koalas = 95;
const newScrore3Koalas = 123;

const newAvarageScoreDolphins = (newScrore1Dolphins + newScrore2Dolphins + newScrore3Dolphins) / 3;
console.log(newAvarageScoreDolphins);

const newAvarageScroreKoalas = (newScrore1Koalas + newScrore2Koalas + newScrore3Koalas) / 3;
console.log(newAvarageScroreKoalas);

if (newAvarageScoreDolphins > newAvarageScroreKoalas && newAvarageScoreDolphins >= 100) {
    console.log('Dolphin is the winner');
} else if (newAvarageScroreKoalas > newAvarageScoreDolphins && newAvarageScroreKoalas >= 100) {
    console.log('Koalas is the winner');
} else if (newAvarageScroreKoalas === newAvarageScoreDolphins && newAvarageScroreKoalas >= 100 && newAvarageScoreDolphins >= 100) {
    console.log('Both win the trophy');
} else {
    console.log('No one wins the trophy');
}
