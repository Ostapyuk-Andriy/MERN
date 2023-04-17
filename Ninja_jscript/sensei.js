const Ninja = require('./ninja.js')

class Sensei extends Ninja {
    constructor(name, wisdom){
        super(name, 200)
        this.speed = 10;
        this.strength = 10;
        this.wisdom = wisdom;

    }
    speakWisdom(){
        super.drinkSake();
        this.wisdom +=10;
        console.log("What one programmer can do in one month, two programmers can do in two month.");
        console.log(`Wisdom ${this.wisdom}`);
        return this;
    }
    showStats(){
        super.showStats();
        return this;
    }
}

const superSensei = new Sensei("Luffy", 10);
superSensei.speakWisdom().showStats();