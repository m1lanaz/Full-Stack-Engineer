const calcAverage = (score1,score2,score3) => (score1 + score2 + score3)/3;

const checkWinner = (avgDolphins,avgKoalas) => {
    console.log(avgDolphins, avgKoalas)
    if(avgDolphins >= (avgKoalas * 2)){
        return `Dolphins win!`;
    }else if (avgKoalas >= (avgDolphins *2)){
        return `Koalas win!`;
    }else{
        return 'No one wins!';
    }
};

const scoreDolphins = calcAverage(85,54,41);
const scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);

console.log(checkWinner(scoreDolphins, 120));
