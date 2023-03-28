const myCountry = {
    language: 'GogglidyGoop',
    weather: 'Sunny',
    daysAWeek: 10,
    isIsland: false,

    describe: function() {
        console.log(`My country is cool, they speak ${this.language} and it's always ${this.weather}`);
    },

    checkNeighbours: function() {
        (this.isIsland) ? this.neighbours = false : this.neighbours = true;
    }
}

myCountry.describe();
myCountry.checkNeighbours();

console.log(myCountry.neighbours);
