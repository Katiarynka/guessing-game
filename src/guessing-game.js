class GuessingGame {
    constructor() {
        this.begin = 0;
        this.end = 0; 
        this.result = 0; 
    }

    setRange(min, max) {
        this.begin = min;
        this.end = max;
    }

    guess() {
        this.result = this.begin + Math.floor((this.end - this.begin + 1) / 2);
        return this.result;
    }

    lower() {
        this.end = this.result;
        //console.log(`lower ${this.begin} ${this.end}`)
    }

    greater() {
        this.begin = this.result;
        //console.log(`greater ${this.begin} ${this.end}`)
    }
}

module.exports = GuessingGame;