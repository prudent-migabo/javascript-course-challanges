const calcAverage = () => {
    const avgDolphins = (44 + 23 + 71) / 3;
    const avgKoalas = (65 + 54 + 49) / 3;
    // const avgDolphins = (85 + 54 + 41) / 3;
    // const avgKoalas = (23 + 34 + 27) / 3;
    console.log(avgDolphins, avgKoalas);
    checkWinner(avgDolphins, avgKoalas);
}

function checkWinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}

calcAverage();